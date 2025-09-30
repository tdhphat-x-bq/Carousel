import { motion, useScroll } from "framer-motion"
import { createContext, useEffect, useState } from "react"

interface MyCtProps {
    Img: string[];
    ID: number;
    setId: (val: number) => void;
};

interface MyProviderProps {
    children: React.ReactNode;
}

export const MyCt = createContext <MyCtProps> ({Img: [], ID: 0, setId: () => {}});

const Navigator = ({ children }: MyProviderProps) => {
    const Img: string[] = [
        'https://img.freepik.com/premium-photo/modern-gaming-computer-setup-with-display-water-cooling-case-keyboard-mouse-gaming-mat-purple-led-light-background_176814-1008.jpg',
        'https://i.ytimg.com/vi/P79GVNuZRzE/maxresdefault.jpg',
        'https://i.ytimg.com/vi/ynOEmutdXic/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0chocSorKn7ALndg8DNbHIaTB8w',
    ];

    const [ID, setID] = useState <number> (0);
    const [deg, setDeg] = useState <number> (0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDeg((prev) => prev + 10);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const setId = (val: number) => setID(val); 

    return (
        <MyCt.Provider value={{ Img, ID, setId }}>
            <div className="absolute top-[80px] left-[300px] grid grid-rows-1 grid-cols-3 gap-3 ">
                {Img.map((img, id) => (
                    <div key={id} className="cursor-pointer w-[100%] h-[100%] p-[10px]"
                        style={id == ID ? 
                            {
                                border: '3px solid',
                                borderImage: `conic-gradient(from ${deg}deg, rgb(67, 67, 205), rgb(223, 102, 223), white, rgb(67, 67, 205)) 1`,
                            } :
                            {
                                border: 'none',
                            }
                        }
                        onClick={() =>  setID(id)}
                    >
                        <img src={img} alt="" width={50} className=""
                            
                        />
                    </div>
                ))}
            </div>
            { children }
        </MyCt.Provider>
    )
}

export default Navigator