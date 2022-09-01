import react from 'react';
import ReactDOM from 'react-dom';
import myImg from './assets/ECDxRYE8_400x400.jpeg';
import './profileimg.css'

function ProfileImg () {
    return (
        <img src={myImg} alt="Aitijya's Image" className='myImg'/>
    )
}

export default ProfileImg