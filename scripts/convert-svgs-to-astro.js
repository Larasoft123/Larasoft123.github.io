import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

// Definir __dirname manualmente en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta de la carpeta que contiene los SVG
const svgFolder = path.join(__dirname, "..", "src", "assets", "socials");

// Ruta de salida para los componentes Astro
const outputFolder = svgFolder;

// Función para convertir un archivo SVG a un componente Astro
const convertSvgToAstro = (svgContent, componentName) => {
  return `---
interface Props {
  className?: string;
}

const { className } = Astro.props;
---

${svgContent
  .replace("<svg", '<svg class={className}')
  .replace(/^\s*<\?xml.*?\?>\s*/g, "")} // Elimina declaraciones XML si existen
`;
};

// Leer todos los archivos en la carpeta
fs.readdir(svgFolder, (err, files) => {
  if (err) {
    console.error("Error al leer la carpeta:", err);
    return;
  }

  // Filtrar solo los archivos .svg
  const svgFiles = files.filter((file) => path.extname(file) === ".svg");

  svgFiles.forEach((file) => {
    const filePath = path.join(svgFolder, file);
    const componentName = path.basename(file, ".svg") + ".astro";
    const outputFilePath = path.join(outputFolder, componentName);

    // Leer el contenido del archivo SVG
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(`Error al leer el archivo ${file}:`, err);
        return;
      }

      // Convertir el contenido SVG a un componente Astro
      const astroComponent = convertSvgToAstro(data, componentName);

      // Escribir el componente Astro en la carpeta de salida
      fs.writeFile(outputFilePath, astroComponent, (err) => {
        if (err) {
          console.error(`Error al escribir el archivo ${componentName}:`, err);
          return;
        }

        console.log(`Componente creado: ${componentName}`);
      });
    });
  });


  // despues de convertir todos los svg, eliminar los archivos svg originales
  svgFiles.forEach((file) => {
    const filePath = path.join(svgFolder, file);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error al eliminar el archivo ${file}:`, err);
        return;
      }
      console.log(`Archivo eliminado: ${file}`);
    });
  });


});

