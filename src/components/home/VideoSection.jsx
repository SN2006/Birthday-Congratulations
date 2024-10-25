import styles from "./VideoSection.module.css"
import {motion} from "framer-motion";
import {useState} from "react";

const videoVariants = {
    hidden: {
        translateY: 500,
        opacity: 0,
        scale: 0.1,
    },
    visible: {
        translateY: 0,
        opacity: 1,
        scale: 1,
    },
}

const buttonVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
        translateX: "-50%",
        translateY: "-50%",
    },
    visible: {
        opacity: 1,
        scale: 1,
        translateX: "-50%",
        translateY: "-50%",
    }
}

const VideoSection = ({src_h, src_v, id, next}) => {
    const [isPaused, setIsPaused] = useState(false);
    const [isInViewport, setIsInViewport] = useState(false);
    const onViewportEnterHandler = () => {
        let video = document.getElementById(id);
        video.play();
        setIsPaused(video.paused);
        setIsInViewport(true);
    }

    const onViewportLeaveHandler = () => {
        let video = document.getElementById(id);
        video.pause();
        setIsInViewport(false);
        setIsPaused(video.paused);
        video.currentTime = 0;
    }

    const onEndedHandler = () => {
        document.location.href = `#${next}`;
    }

    const onPauseHandler = () => {
        let video = document.getElementById(id);
        if (isPaused){
            video.play();
        }else{
            video.pause();
        }
        setIsPaused(prevState => !prevState);
    }

    const getSrc = () => {
        return window.innerWidth > window.innerHeight ? src_h: src_v;
    }

    return <motion.section
        className={styles["video-section"]}
        initial="hidden"
        onViewportEnter={onViewportEnterHandler}
        onViewportLeave={onViewportLeaveHandler}
        whileInView="visible"
        viewport={{once: false, amount: 1}}
    >
        <motion.button
            translate={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            }}
            initial="hidden"
            animate={isPaused && isInViewport ? 'visible' : 'hidden'}
            variants={buttonVariants}
            className={styles["play-btn"]}
        >Play</motion.button>
        <motion.video
            onClick={onPauseHandler}
            onEnded={onEndedHandler}
            id={id}
            translate={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            }}
            variants={videoVariants}
            src={getSrc()}
            className={styles['video-section__video']}
            autoPlay
        ></motion.video>
    </motion.section>
}

export default VideoSection;