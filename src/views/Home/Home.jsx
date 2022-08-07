 import {useState} from 'react';
import ColecaoLista from "components/ColecaoLista/ColecaoLista";

import Navbar from 'components/Navbar/Navbar';
import Linhas from 'components/Linhas/Linhas';
import Sobre from 'components/Sobre/Sobre';
import AdicionaProduto from "components/ModalAdicionar/AdicionarProduto";
import { produtos } from "mocks/colecao01.js";

import "./Home.css";
import Banner from 'components/Banner/Banner';
import Footer from '../../components/Footer/Footer';


function Home() {

  const [canShowAdicionaProduto, setCanShowAdicionaProduto] = useState(false);
  const [produtoAdicionar, setProdutoAdicionar] = useState();

  const newProductHandle = (produto) => {
    console.log(`produto novo adicionado ${produto}`)
    setProdutoAdicionar(produto)
    console.log(produto)
    produtos.push(produto)
  }

  return (
    <div className="Home">
      <Navbar createProduto={() => setCanShowAdicionaProduto(true)}/>
      <Banner />
      <Linhas />
      <div className="Home__container">
        
        <ColecaoLista produtos={produtos} />

        {
          canShowAdicionaProduto && <AdicionaProduto 
            closeModal={() => setCanShowAdicionaProduto(false)}
            onCreateProduto={(produto) => {newProductHandle(produto)}}
            />
        }
         
      </div>
      <Sobre />
      <Footer />
    </div>
  );
}

export default Home;
