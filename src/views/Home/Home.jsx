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
  const [bannerIndex, setBannerIndex] = useState(0);
  // const [produtoAdicionar, setProdutoAdicionar] = useState();
  const changeBannerHandle = (index) => {
    console.log(index);
    setBannerIndex(index);
  }




  const newProductHandle = (produto) => {
    console.log(`produto novo adicionado ${produto}`)
    // setProdutoAdicionar(produto)
    console.log(produto)
    produtos.push(produto)
  }
  
  // const stateBanner = Banner.index[0]

  return (
    <div className="Home">
    
      <Navbar createProduto={() => setCanShowAdicionaProduto(true)} bannerIndex={bannerIndex}/>
      <Banner changeBannerHandle = {changeBannerHandle} />
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
      <Sobre changeBannerHandle ={() => setCanShowAdicionaProduto(true)} bannerIndex={bannerIndex} />
      <Footer changeBannerHandle ={() => setCanShowAdicionaProduto(true)} bannerIndex={bannerIndex}/>
    </div>
  );
}

export default Home;
