import styles from "./Home.module.css"
import TextSection from "./TextSection.jsx";
import IgorHorizontal from "../../assets/video/horizontal/Igor.mp4"
import IgorVertical from "../../assets/video/vertical/Igor.mp4"
import video2H from "../../assets/video/horizontal/video2.mp4"
import video3H from "../../assets/video/horizontal/video3.mp4"
import video2V from "../../assets/video/vertical/video2.mp4"
import video3V from "../../assets/video/vertical/video3.mp4"
import VideoSection from "./VideoSection.jsx";

const Home = () => {
    return <div className={styles['main-container']}>
        <TextSection/>
        <VideoSection src_h={IgorHorizontal} src_v={IgorVertical} id="v1"/>
        <VideoSection src_h={video2H} src_v={video2V} id="v2"/>
        <VideoSection src_h={video3H} src_v={video3V} id="v3"/>
    </div>
}

export default Home;