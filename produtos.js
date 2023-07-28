function cadastraProduto(){
    let nome = document.getElementById("nome").value;
    let valor = document.getElementById("valor").value;
    let descricao = document.getElementById("descricao").value;
    let imagem = document.getElementById("imagem").value;

    let produto = {
        nome,
        valor,
        descricao,
        imagem
    }

    if(!localStorage.getItem("produtos")){
        localStorage.setItem("produtos", JSON.stringify([]));
    };

    let produtos = JSON.parse(localStorage.getItem("produtos"));

    produtos.unshift(produto);

    localStorage.setItem("produtos", JSON.stringify(produtos));
    limpaCampos();
    listaProdutos();

}

function listaProdutos(){
    let produtos = JSON.parse(localStorage.getItem("produtos"));
    let html = "";
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        let card = `
        <div class="col-4">
                <div class="card mb-4" style="width: 18rem;">
                    <img style="height:150px; object-fit: contain;" src="${produto.imagem}" class="card-img-top" alt="sem imagem">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p>R$ ${produto.valor}</p>
                        <p class="card-text">${produto.descricao}</p>
                        <button type="button" class="btn btn-primary">Editar</button>
                        <button type="button" class="btn btn-danger" onclick="deletaProduto(${i})">Excluir</button>
                    </div>
                </div>
            </div>  
        `;

        html += card;
    }

   document.getElementById("produtos").innerHTML = html;
}

function deletaProduto(index){
    let produtos = JSON.parse(localStorage.getItem("produtos"));
    produtos.splice(index, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    listaProdutos();
}

function atualizaProduto(index, produto){
    console.log(index,produto);
};

listaProdutos();

function limpaCampos(){
    document.getElementById("nome").value ="";
    document.getElementById("valor").value ="";
    document.getElementById("descricao").value ="";
    document.getElementById("imagem").value ="";
}