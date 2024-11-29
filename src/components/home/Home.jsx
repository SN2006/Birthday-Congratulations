import styles from "./Home.module.css"
import TextSection from "./TextSection.jsx";
import IgorHorizontal from "../../assets/video/horizontal/Igor.mov"
import IgorVertical from "../../assets/video/vertical/Igor.mov"
import SlavikHorizontal from "../../assets/video/horizontal/Slavik.mov"
import SlavikVertical from "../../assets/video/vertical/Slavik.mov"
import DanyaVertical from "../../assets/video/vertical/Danya.mov"
import DanyaHorizontal from "../../assets/video/horizontal/Danya.mov"
import ValeraHorizontal from "../../assets/video/horizontal/Valera.mov"
import ValeraVertical from "../../assets/video/vertical/Valera.mov"
import VideoSection from "./VideoSection.jsx";
import Loading from "./Loading.jsx";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const variants = {
    visible: {
        opacity: 1,
        zIndex: 99,
    },
    hidden: {
        opacity: 0,
        display: 'none',
    }
}

const buttonContainerVariants = (delay) => ({
    hidden: {
        opacity: 0,
        scale: 0,
        display: "block",
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: delay * 0.3
        }
    },
})

const buttonVariants = () => ({
    hover: {
        scale: 1.1,
    },
    tap: {
        scale: 0.9,
    }
})

const btnTransition = {
    type: "spring",
    stiffness: 400,
    damping: 10
}

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isIgorVisible, setIsIgorVisible] = useState(false);
    const [isSlavikVisible, setIsSlavikVisible] = useState(false);
    const [isValeraVisible, setIsValeraVisible] = useState(false);
    const [isDanyaVisible, setIsDanyaVisible] = useState(false);

    const [canPlay1, setCanPlay1] = useState(false);
    const [canPlay2, setCanPlay2] = useState(false);
    const [canPlay3, setCanPlay3] = useState(false);
    const [canPlay4, setCanPlay4] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 25000)
    })

    // useEffect(() => {
    //     if (canPlay1) {
    //         setIsLoading(false);
    //     }
    // }, [canPlay1]);

    return <div className={styles['main-container']}>
        <motion.div
            variants={variants}
            initial="visible"
            animate={isLoading ? "visible" : "hidden"}
        >
            <Loading/>
        </motion.div>
        <TextSection/>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.8}}
            className={styles['congratulations__buttons']}>
            <div
                className={styles['congratulations__buttons__grid']}>
                <motion.div
                    variants={buttonContainerVariants(2)}
                >
                    <motion.button
                        transition={btnTransition}
                        variants={buttonVariants(2)}
                        whileTap="tap"
                        whileHover="hover"
                        className={styles['congratulations__btn']}
                        onClick={() => setIsIgorVisible(true)}
                    >
                        Ihor
                    </motion.button>
                </motion.div>
                <motion.div
                    variants={buttonContainerVariants(4)}
                >
                    <motion.button
                        transition={btnTransition}
                        variants={buttonVariants(4)}
                        whileTap="tap"
                        whileHover="hover"
                        className={styles['congratulations__btn']}
                        onClick={() => setIsSlavikVisible(true)}
                    >
                        Slavik
                    </motion.button>
                </motion.div>
                <motion.div
                    variants={buttonContainerVariants(1)}
                >
                    <motion.button
                        transition={btnTransition}
                        variants={buttonVariants(1)}
                        whileTap="tap"
                        whileHover="hover"
                        className={styles['congratulations__btn']}
                        onClick={() => setIsValeraVisible(true)}
                    >
                        Valera
                    </motion.button>
                </motion.div>
                <motion.div
                    variants={buttonContainerVariants(3)}
                >
                    <motion.button
                        transition={btnTransition}
                        variants={buttonVariants(3)}
                        whileTap="tap"
                        whileHover="hover"
                        className={styles['congratulations__btn']}
                        onClick={() => setIsDanyaVisible(true)}
                    >
                        Danya
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
        <VideoSection
            src_h={IgorHorizontal}
            src_v={IgorVertical}
            id="v1"
            isOpen={isIgorVisible}
            onClose={() => setIsIgorVisible(false)}
            onCanPlay={() => setCanPlay1(true)}
        />
        <VideoSection
            src_h={SlavikHorizontal}
            src_v={SlavikVertical}
            id="v2"
            isOpen={isSlavikVisible}
            onClose={() => setIsSlavikVisible(false)}
            onCanPlay={() => setCanPlay2(true)}
        />
        <VideoSection
            src_h={ValeraHorizontal}
            src_v={ValeraVertical}
            id="v3"
            isOpen={isValeraVisible}
            onClose={() => setIsValeraVisible(false)}
            onCanPlay={() => setCanPlay3(true)}
        />
        <VideoSection
            src_h={DanyaHorizontal}
            src_v={DanyaVertical}
            id="v4"
            isOpen={isDanyaVisible}
            onClose={() => setIsDanyaVisible(false)}
            onCanPlay={() => setCanPlay4(true)}
        />
    </div>
}

export default Home;