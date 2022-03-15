import {React} from 'react';
import Vimeo from '@u-wave/react-vimeo';

const Video = () => {

    const segundos = 65;

    const interceptVideoWatching = (timeLine) => {
        console.log(timeLine);
        const {seconds} = timeLine;
        
        if(seconds > 90){
            console.log('Chamar API gravar progressão!');
        }
    }

    return (
        <Vimeo
            video="https://player.vimeo.com/video/569211124?dnt=1&app_id=122963"
            autoplay
            start={segundos}
            onProgress={interceptVideoWatching}
            />
    )
}

export default Video;