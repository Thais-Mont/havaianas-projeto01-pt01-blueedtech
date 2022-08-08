import "./Footer.css";
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'
function Footer({bannerIndex}) {
  const [background, setBackground] = useState('dark');
  useEffect(()=> { 
    if(bannerIndex === 2) {
      setBackground('greenligth');
    } else if(bannerIndex === 1) {
      setBackground('green') ;
    } else {
      setBackground('dark') ;
    };
  },[bannerIndex])

  return (

    <div className="footerContato" variant={background}>
       <Image className="footerImagem"
      src="https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-Havaianas-BR-Library/default/dwae1547c3/18_about_us/01_landing_page/00_main_banner.png" alt="" >

      </Image>
            <p>Desenvolvido Por Caio e Thais</p>
        </div>
  );
}

export default Footer;