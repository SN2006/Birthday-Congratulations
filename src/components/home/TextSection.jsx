import style from "./TextSection.module.css"
import {motion} from "framer-motion";
import pic1 from "../../assets/images/pic1.jpg"
import pic2 from "../../assets/images/pic2.jpg"
import pic3 from "../../assets/images/pic3.jpg"
import pic4 from "../../assets/images/pic4.jpg"
import pic5 from "../../assets/images/pic5.jpg"
import pic6 from "../../assets/images/pic6.jpg"
import {useState} from "react";

const pictureVariants = (x, y, rotateStart, rotateEnd, scale, z_index) => ({
    hidden: {
        rotateZ: rotateStart,
        translateX: `calc(-50% + 0px)`,
        translateY: `calc(-50% + 0px)`,
        scale: 0.1,
    },
    visible: {
        rotateZ: rotateEnd,
        translateX: `calc(-50% + ${x}px)`,
        translateY: `calc(-50% + ${y}px)`,
        scale: scale,
    }
})

const titleVariants = () => ({
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
    }
})

const buttonVariants = () => ({
    hidden: {
        opacity: 1,
        scale: 1,
        display: "block"
    },
    visible: {
        opacity: 0,
        scale: 0,
        display: "none"
    },
    hover: {
        scale: 1.1,
    },
    tap: {
        scale: 0.9,
    }
})
const CORDS_LARGE = [
    [-305, 210],
    [-334, -184],
    [20, -237],
    [351, -187],
    [352, 214],
    [20, 244],
];

const CORDS_SMALL = [
    [-145, 150],
    [-154, -144],
    [0, -167],
    [160, -130],
    [162, 184],
    [10, 184],
];
const TextSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    return <motion.section
        className={style['text-section']}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        onClick={() => setIsOpen(prev => !prev)}
        id="label"
    >
        <motion.button
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 10
            }}
            className={style['button']}
            onClick={(event) => {
                event.stopPropagation();
                setIsOpen(prev => !prev)
            }}
            variants={buttonVariants()}
        >
            Click me
        </motion.button>
        <motion.h1
            className={style.text}
            transition={{
                type: "spring",
                stiffness: 28.8,
                damping: 12
            }}
            variants={titleVariants()}
        >
            Happy birthday!
        </motion.h1>
        <motion.img
            transition={{
                type: "spring",
                stiffness: 28.8,
                damping: 12
            }}
            variants={pictureVariants(window.innerWidth > 900 ? CORDS_LARGE[0][0] : CORDS_SMALL[0][0],
                window.innerWidth > 900 ? CORDS_LARGE[0][1] : CORDS_SMALL[0][1],
                66, 12, 1.2, 6)}
            className={style.img}
            alt="picture"
            src={pic1}
        />
        <motion.img
            transition={{
                type: "spring",
                stiffness: 28.8,
                damping: 12
            }}
            variants={pictureVariants(window.innerWidth > 900 ? CORDS_LARGE[1][0] : CORDS_SMALL[1][0],
                window.innerWidth > 900 ? CORDS_LARGE[1][1] : CORDS_SMALL[1][1], -154, -11, 1.2, 5)}
            className={style.img}
            alt="picture"
            src={pic2}
        />
        <motion.img
            transition={{
                type: "spring",
                stiffness: 28.8,
                damping: 12
            }}
            variants={pictureVariants(window.innerWidth > 900 ? CORDS_LARGE[2][0] : CORDS_SMALL[2][0],
                window.innerWidth > 900 ? CORDS_LARGE[2][1] : CORDS_SMALL[2][1], -76, 0, 1, 4)}
            className={style.img}
            alt="picture"
            src={pic3}
        />
        <motion.img
            transition={{
                type: "spring",
                stiffness: 28.8,
                damping: 12
            }}
            variants={pictureVariants(window.innerWidth > 900 ? CORDS_LARGE[3][0] : CORDS_SMALL[3][0],
                window.innerWidth > 900 ? CORDS_LARGE[3][1] : CORDS_SMALL[3][1], 134, 17, 1.2, 3)}
            className={style.img}
            alt="picture"
            src={pic4}
        />
        <motion.img
            transition={{
                type: "spring",
                stiffness: 28.8,
                damping: 12
            }}
            variants={pictureVariants(window.innerWidth > 900 ? CORDS_LARGE[4][0] : CORDS_SMALL[4][0],
                window.innerWidth > 900 ? CORDS_LARGE[4][1] : CORDS_SMALL[4][1], -89, -10, 1.2, 2)}
            className={style.img}
            alt="picture"
            src={pic5}
        />
        <motion.img
            transition={{
                type: "spring",
                stiffness: 28.8,
                damping: 12
            }}
            variants={pictureVariants(window.innerWidth > 900 ? CORDS_LARGE[5][0] : CORDS_SMALL[5][0],
                window.innerWidth > 900 ? CORDS_LARGE[5][1] : CORDS_SMALL[5][1], 50, 0, 1, 1)}
            className={style.img}
            alt="picture"
            src={pic6}
        />
    </motion.section>
}

export default TextSection;