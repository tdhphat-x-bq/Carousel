import { motion, useSpring } from 'framer-motion';
import { useContext, useEffect, useRef } from 'react';
import { MyCt } from './Navigator';

const CoolComputer = () => {
    const legacy = useContext(MyCt)!;
    const box = useRef <HTMLDivElement> (null);
    const boxes = Array(3).fill(useRef <HTMLDivElement> (null));

    const x = useSpring(0, {
        stiffness: 200,
        damping: 45, 
    });

    useEffect(() => {
        x.set(-legacy.ID * 390 + 38 * (-legacy.ID));
        // console.log(legacy.ID, legacy.prev);
    }, [legacy.ID]);

    useEffect(() => {
        const handle = (e: MouseEvent): void => {
            if (box.current!.contains(e.target as Node)) {
                // something process to hidden and visible navigator, i'm so lazy =))
            }
        }

        window.addEventListener('mousemove', handle);

        return () => window.removeEventListener('mousemove', handle);
    }, []);

    return (
        <div className='w-[450px] h-[250px] flex justify-around items-center'> 
            <div className='cursor-pointer'
                onClick={() => legacy.setId(0)}
            >{'<'}</div>

            <div className='w-[320px] h-[230px] flex justify-center items-center overflow-hidden' ref={box} >
                <motion.div className='w-[100%] h-[100%] flex justify-center items-center relative '
                    style={{ x }}
                >
                    {legacy.Img.map((img, id) => (
                        <img key={id} src={img} alt=""  className='absolute'
                            style={{
                                left: 430 * id,//`${id * 300}`,
                            }}
                            ref={boxes[id]} 
                        />
                    ))}
                </motion.div>
            </div>

            {/* Similar */}
            <div className='cursor-pointer'>{'>'}</div>
        </div>
    )
}

export default CoolComputer