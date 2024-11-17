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

const sectionVariants = {
    hidden: {
        display: "none",
    },
    visible: {
        display: "flex",
    }
}

const VideoSection = ({src_h, src_v, id, isOpen, onClose}) => {
    const [isPaused, setIsPaused] = useState(true);

    const onEndedHandler = () => {
        let video = document.getElementById(id);
        video.pause();
        video.currentTime = 0;
        setIsPaused(video.paused);
    }

    const onPauseHandler = (e) => {
        e.stopPropagation();
        let video = document.getElementById(id);
        if (isPaused) {
            video.play();
        } else {
            video.pause();
        }
        setIsPaused(prevState => !prevState);
    }

    const onCloseHandler = (e) => {
        e.stopPropagation();
        let video = document.getElementById(id);
        video.pause();
        video.currentTime = 0;
        setIsPaused(video.paused);
        onClose();
    }

    const getSrc = () => {
        return window.innerWidth > window.innerHeight ? src_h : src_v;
    }

    return <motion.section
        className={styles["video-section"]}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={sectionVariants}
        viewport={{once: false, amount: 0.8}}
    >
        <motion.button
            translate={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            }}
            initial="hidden"
            animate={isPaused && isOpen ? 'visible' : 'hidden'}
            variants={buttonVariants}
            className={styles["play-btn"]}
            onClick={onPauseHandler}
        >Play
        </motion.button>
        <motion.button
            translate={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            }}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            variants={buttonVariants}
            className={styles["close-btn"]}
            onClick={onCloseHandler}
        >
            <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1"
                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="-51.2 -51.2 614.40 614.40" xmlSpace="preserve" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#ffffff"
                   strokeWidth="102.4"> <g> <g> <polygon
                    points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "/> </g> </g> </g>
                <g id="SVGRepo_iconCarrier"> <g> <g> <polygon
                    points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "/> </g> </g> </g>

            </svg>
        </motion.button>
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
            className={styles['video-section__video']}
            playsInline
        >
            <source src={getSrc()} type="video/mp4" />
        </motion.video>
    </motion.section>
}

export default VideoSection;