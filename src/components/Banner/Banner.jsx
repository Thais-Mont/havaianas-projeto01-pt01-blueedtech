import "./Banner.css";
import Image from 'react-bootstrap/Image'
import banner from "assets/images/bg01.PNG";

function Banner() {
  return (
    <Image fluid src={ banner } width="100%" alt="banner"/>
  );
}

export default Banner;
