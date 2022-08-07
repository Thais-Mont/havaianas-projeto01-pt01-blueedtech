import "./Linhas.css";
import Figure from 'react-bootstrap/Figure';
import Figure01 from 'assets/images/Group-1.png'
import Figure02 from 'assets/images/Group-2.png'
import Figure03 from 'assets/images/Group-3.png'
import Figure04 from 'assets/images/Group-4.png'

function Linhas() {
  return (
    <Figure className="Linhas">
      <Figure.Image
        className="Linhas__bottons"
        width={180}
        height={100}
        alt="Quebrada Cria"
        src={Figure01}
      />
       <Figure.Image
        className="Linhas__bottons"
        width={171}
        height={180}
        alt="Linha Pride"
        src={Figure02}
      />
         <Figure.Image
        className="Linhas__bottons"
        width={171}
        height={180}
        alt="Matte Leão"
        src={Figure03}
      />
      <Figure.Image
        className="Linhas__bottons"
        width={171}
        height={180}
        alt="Linha Marvel"
        src={Figure04}
      />
    </Figure>

  );
}

export default Linhas;