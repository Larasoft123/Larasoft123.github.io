

type SkillCardProps = {
    name: string;
    image: {
        logo: string;
        width: number;
        height: number;
        className?: string;
    };
};

export const SkillCard = ({ name, image }: SkillCardProps) => (
    <div
        className={`flex group hover:scale-110 transition-transform relative z-10 logo flex-col items-center p-1 justify-center w-14 sm:w-20 h-auto`}
   


    >
        
         <img  src={image.logo} alt={name} />
           
                    
        

    </div>


);

