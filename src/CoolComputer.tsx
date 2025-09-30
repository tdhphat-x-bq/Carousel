import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { MyCt } from './Navigator';

const CoolComputer = () => {
    const legacy = useContext(MyCt)!;
    const box = useRef <HTMLDivElement> (null);

    const x = useSpring(0, {
        stiffness: 200,
        damping: 45, 
    });

    useEffect(() => {
        x.set(-legacy.ID * 390 + 38 * (-legacy.ID));
        // console.log(legacy.ID, legacy.prev);
    }, [legacy.ID]);

    return (
        <div className='w-[450px] h-[250px] flex justify-around items-center'> 
            <div className='cursor-pointer'
                onClick={() => legacy.setId(0)}
            >{'<'}</div>

            <div className='w-[400px] h-[230px] bg-black overflow-hidden' ref={box}>
                <motion.div className='w-[80%] h-[100%] flex justify-center items-center bg-black relative '
                    style={{ x }}
                >
                    {legacy.Img.map((img, id) => (
                        <img key={id} src={img} alt=""  className='absolute'
                            style={{
                                left: 430 * id + 38,//`${id * 300}`,
                            }}
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