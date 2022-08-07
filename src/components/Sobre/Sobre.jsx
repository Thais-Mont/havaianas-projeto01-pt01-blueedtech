import "./Sobre.css";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Sobre() {


  return (
    <div className="havaianas_tns">

        <div className="havainas_tns_imagem">
            <h1>Havaianas TNS: Pra você andar leve</h1>
            <p>Conheça a coleção de tênis criada para trazer LEVEZA para sua vida e, claro, praticidade.</p>
            <Button href="https://havaianas.com.br/" className="havaianas_tns_button"variant="secondary" size="lg">Saiba Mais!</Button>

        </div>

      <Image
      src="https://havaianas.com.br/on/demandware.static/-/Sites-Havaianas-BR-Library/default/dw7b2ed804/explore/banner-tns-683x543.png" alt="" >

      </Image>


    </div>
  )

}

export default Sobre;
