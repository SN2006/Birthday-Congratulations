import styles from "./Home.module.css"
import TextSection from "./TextSection.jsx";
import video1H from "../../assets/video/horizontal/video1.mp4"
import video2H from "../../assets/video/horizontal/video2.mp4"
import video3H from "../../assets/video/horizontal/video3.mp4"
import video1V from "../../assets/video/vertical/video1.mp4"
import video2V from "../../assets/video/vertical/video2.mp4"
import video3V from "../../assets/video/vertical/video3.mp4"
import VideoSection from "./VideoSection.jsx";

const Home = () => {
    return <div className={styles['main-container']}>
        <TextSection/>
        <VideoSection src_h={video1H} src_v={video1V} id="v1" next="v2"/>
        <VideoSection src_h={video2H} src_v={video2V} id="v2" next="v3"/>
        <VideoSection src_h={video3H} src_v={video3V} id="v3" next="label"/>
    </div>
}

export default Home;