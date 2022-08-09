import "./Footer.css";
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'
function Footer({bannerIndex}) {
  const [background, setBackground] = useState('dark');
  useEffect(()=> { 
    if(bannerIndex === 2) {
      setBackground('footerContato-greenligth');
    } else if(bannerIndex === 1) {
      setBackground('footerContato-green') ;
    } else {
      setBackground('footerContato-dark') ;
    };
  },[bannerIndex])

  return (

    <div className={background}>
            <p>Desenvolvido Por Caio e Thais</p>
        </div>
  );
}

export default Footer;