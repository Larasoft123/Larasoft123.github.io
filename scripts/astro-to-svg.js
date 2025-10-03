import { readdirSync, readFileSync, writeFileSync, unlinkSync } from "fs";
import { join, dirname, basename } from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Subimos un nivel desde scripts/ para llegar a la raíz del proyecto
const astroDir = join(__dirname, "..", "src", "assets", "Logos");

readdirSync(astroDir).forEach(file => {
  if (file.endsWith(".astro")) {
    const filePath = join(astroDir, file);
    const content = readFileSync(filePath, "utf8");
    const svgMatch = content.match(/<svg[\s\S]*?<\/svg>/);

    if (svgMatch) {
      // Elimina class={className} del tag <svg ...>
      let svgContent = svgMatch[0].replace(/\s*class=\{className\}/, "");
      const svgFilePath = join(astroDir, file.replace(/\.astro$/, ".svg"));
      writeFileSync(svgFilePath, svgContent, "utf8");
      unlinkSync(filePath);
      console.log(`Convertido y borrado: ${file} → ${basename(svgFilePath)}`);
    } else {
      console.log(`No se encontró SVG en: ${file}`);
    }
  }
});