import "./AdicionarProduto.css";
import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
// import { ProdutoService } from "services/ProdutoService";

function AdicionarProduto({ closeModal, onCreateProduto }) {
    const form = {
        preco: "",
        titulo: "",
        descricao: "",
        foto: "",
    };

    const [state, setState] = useState(form);
    const [canDisable, setCanDisable] = useState(true);

    const canDisableSendButton = () => {
        const response = !Boolean(
            state.descricao.length &&
            state.foto.length &&
            state.titulo.length &&
            state.preco.length
        );

        setCanDisable(response);
    };

    const handleChange = (e, name) => {
        setState({ ...state, [name]: e.target.value });
    };

    useEffect(() => {
        canDisableSendButton();
    });

    const createProduto = async () => {
        

        const { titulo, descricao, preco, foto } = state;

        const produto = {
            titulo,
            descricao,
            preco: parseFloat(preco),
            foto,
        };

        //const response = await ProdutoService.create(produto);
        onCreateProduto(produto);
        closeModal();
    };

    return (
        <Modal closeModal={closeModal}>
            <div className="AdicionaProdutoModal">
                <form autoComplete="off">
                    <h2> Cadastrar Produto </h2>
                    <div>
                        <label className="AdicionaProdutoModal__text" htmlFor="titulo"> Título: </label>
                        <input
                            id="titulo"
                            placeholder="Chinelo Havaianas"
                            type="text"
                            value={state.titulo}
                            required
                            onChange={(e) => handleChange(e, "titulo")} />
                    </div>
                    <div>
                        <label className="AdicionaProdutoModal__text" htmlFor="preco"> Preco: </label>
                        <input
                            id="preco"
                            placeholder="10,00"
                            type="text"
                            value={state.preco}
                            required
                            onChange={(e) => handleChange(e, "preco")} />
                    </div>
                    <div>
                        <label className="AdicionaProdutoModal__text" htmlFor="descricao"> Descricao: </label>
                        <input
                            id="descricao"
                            placeholder="Detalhe o produto"
                            type="text"
                            value={state.descricao}
                            required
                            onChange={(e) => handleChange(e, "descricao")} />
                    </div>
                    <div>
                    <label className="AdicionaProdutoModal__text" htmlFor="foto"> URL Imagem: </label>
                        <input
                            className=" AdicionaProdutoModal__foto"
                            id="foto"
                            placeholder="https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dw955a1239/product-images/4123500_9446_SANDALIA-HAVAIANAS-DISNEY-STYLISH_A.png?sw=680&sh=680"
                            type="text"
                            value={state.foto}
                            required
                            onChange={(e) => handleChange(e, "foto")} />
                    </div>

                    <button
                        className="AdicionaProdutoModal__enviar"
                        type="button"
                        disabled={canDisable}
                        onClick={createProduto} >
                        Enviar
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default AdicionarProduto;
