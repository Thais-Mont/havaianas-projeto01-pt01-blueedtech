import "./ColecaoListaItem.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListaProdutoItem({
  produto,
  quantidadeSelecionada,
  index,
  clickItem,
}) {

  return (
    <Container>
    <Row>
    <Col md={4} xs={12}>
    {/* <div className="ListaProdutoItem" onClick={() => {console.log('ola'); clickItem(produto.id)}}> */}
    <div className="ListaProdutoItem" onClick={() => clickItem(produto)}>
      <div>
       
        <img
          className="ListaProdutoItem__foto"
          src={produto.foto}
          alt="imagens"
        />
         <div className="ListaProdutoItem__titulo">{produto.titulo}</div>
        <div className="ListaProdutoItem__preco">
          {produto.preco.toFixed(2)}
        </div>
      </div>
    </div>
    </Col>
    </Row>
    </Container>
  );
}
export default ListaProdutoItem;
