function carregar_novidades(){
    const livros_novidades = document.getElementById("livrosnovidades")
    let saida ="";
    fetch("http://127.0.0.1:5000/api/v1/produto/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida +=`<div class="livro">
                    <img src="${liv.foto1}" alt="${liv.nome}">
                    <h3>${liv.nome}</h3>
                    <p class="preco"> R$ ${liv.preco}</p>
                    <button>
                    <img src="img/carrinhoo.png">
                    <p> Adicionar ao carrinho </p>
                    </button>
                </div>`
        })
        livros_novidades.innerHTML=saida;
    })
    carregar_maisvendidos();
}

function carregar_maisvendidos(){
    const livros_maisvendidos = document.getElementById("livrosmaisvendidos")
    let saida ="";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarmaisvendidos")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida +=`<div class="livro">
                    <img src="${liv.foto1}" alt="${liv.nome}">
                    <h3>${liv.nome}</h3>
                    <p class="quantidade"> Qtd: ${liv.quantidade}</p>
                    
                </div>`
        })
        livros_maisvendidos.innerHTML=saida;
    })
    carregar_autores();
}


function carregar_autores(){
    const livros_autores = document.getElementById("livrosautores")
    let saida ="";
    fetch("http://127.0.0.1:5000/api/v1/autor/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida +=`<div class="autor">
                    <img src="${liv.foto}" alt="autor ${liv.nome}">
                    <h3>${liv.nome}</h3>
                </div>`
        })
        livros_autores.innerHTML=saida;
    })
}

let pe = 0
function rolarNovidadesEsquerda(){
   
  // console.log(livrosnovidades.style.marginLeft)
   if(pe < -140){
    pe = -190
   }
   else{
    pe-=120
   }
   let livrosnovidades = document.getElementById("livrosnovidades")
   livrosnovidades.style.marginLeft=`${pe}px`
   
}


function rolarNovidadesDireita(){
   
    // console.log(livrosnovidades.style.marginRight)
    if(pe = 10){
        pe = 0
       }
       else{
        pe+=90
       }
       let livrosnovidades = document.getElementById("livrosnovidades")
       livrosnovidades.style.marginLeft=`${pe}px`
       
      //  pe+=120
}


function carregarlivrosesporte(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/Esporte")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livesporte>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}



function carregarlivrosficcao(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/ficcao")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livficcao>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}

function carregarlivrosromance(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/romance")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livromance>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}


function carregarlivrosfantasia(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/fantasia")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livfantasia>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}


function carregarlivrosinfantil(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/infantil")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livinfantil>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}
let produtos_no_carrinho = [];
function adicionar_carrinho(foto,nome,preco,qtd){
        let produto = {
            nome_produto:nome,
            foto_produto:foto,
            preco_produto:preco,
            quantidade_produto:qtd

        }
        produtos_no_carrinho.push(produto);
        // vamso adicionar a lista de produtos do carrinho ao 
        // banco de dados do navegador, usando o comando localstorage
        window.localStorage.setItem("carrinho", JSON.stringify({produtos_no_carrinho}))
}
function carregar_detalhes(){

    let idlivro = window.location.search.split('=');
    idlivro = idlivro[1];

    const div_detalhes = document.getElementById("detalhes");
    fetch(`http://127.0.0.1:5000/api/v1/produto/listarporid/${idlivro}`)
    .then((res) => res.json())
    .then((dt)=>{
        console.log(dt);
        let div_img = document.createElement("div");
        div_img.setAttribute("id","div_img");
        let div_capa = document.createElement("div");
        div_capa.setAttribute("id","div_capa");
        let img_capa = document.createElement("img")
        img_capa.src=dt[0].foto1;

        //adicionar a imagem de capa a div capa
        div_capa.appendChild(img_capa)

        //adicionar a div capa a div imagem
        div_img.appendChild(div_capa)


        let div_miniatura = document.createElement("div")
        div_miniatura.setAttribute("id","div_miniatura");
        let img_miniatura1=document.createElement("img");
        let img_miniatura2=document.createElement("img");
        let img_miniatura3=document.createElement("img");
        img_miniatura1.src=dt[0].foto1;
        img_miniatura2.src=dt[0].foto2;
        img_miniatura3.src=dt[0].foto3;

        //colocar as fotos de miniatura dentro da div miniatura

        div_miniatura.appendChild(img_miniatura1);
        div_miniatura.appendChild(img_miniatura2);
        div_miniatura.appendChild(img_miniatura3);

        //colocar a div miniatura dentro da div imagem
        div_img.appendChild(div_miniatura)

        // colocar a div de imagens dentro da iv detalhes
        div_detalhes.appendChild(div_img)
        
        let div_titulo_descricao = document.createElement("div");
        div_titulo_descricao.setAttribute("id", "div_titulo_descricao");

        let h3_titulo=document.createElement("h3");
        h3_titulo.innerHTML = dt[0].nome;

        let p_descricao = document.createElement("p");
        p_descricao.innerHTML = dt[0].descricao;

        // adicionar o titulo e a descricao dentro da div titulo detalhes
        div_titulo_descricao.appendChild(h3_titulo);
        div_titulo_descricao.appendChild(p_descricao);
        div_detalhes.appendChild(div_titulo_descricao);

        let div_carrinho = document.createElement("div");
        div_carrinho.setAttribute("id", "div_carrinho");

        let p_preco = document.createElement("p");
        p_preco.innerHTML = dt[0].preco;

        let btn_adicionar_carrinho = document.createElement("button");
        btn_adicionar_carrinho.innerHTML="Adiconar ao carrinho";
       
        btn_adicionar_carrinho.onclick = ()=>{
            adicionar_carrinho(dt[0].foto1,dt[0].nome,dt[0].preco,1);
        }
    

        //  adicionar o p e a btn a div carrinho
        div_carrinho.appendChild(p_preco);
        div_carrinho.appendChild(btn_adicionar_carrinho);
        div_detalhes.appendChild(div_carrinho);


    })
    .catch((error)=>{
        console.error(error)
    })
}


const area_carrinho = document.getElementsByClassName("carrinho")[0];
const div_qtd_itens = document.createElement("div");

div_qtd_itens.setAttribute("id", "div_qtd_itens");
area_carrinho.appendChild(div_qtd_itens);
function carregar_produtos_carrinho(){
    let produtos = window.localStorage.getItem("carrinho");
    if(produtos!=null){
        document.getElementById("div_qtd_itens").style.display="block"
    }
    console.log(produtos);
    console.log(JSON.parse(produtos));
  // console.log(JSON.parse(produtos).produtos_no_carrinho.lenght);
    div_qtd_itens.innerHTML = JSON.parse(produtos).produtos_no_carrinho.lenght;
    const lista_produtos_carrinho = document.getElementById("lista_produtos_carrinho");
    JSON.parse(produtos).produtos_no_carrinho.map((itens)=>{
        let mont = `<div>
        <input type= "checkbox" name = "selecionado">
        <img src = ${itens.foto_produto}>
        <h4${itens.nome_produto}</h4>
        <h5${itens.preco_produto}</h5>
        <input type = "number" value=1 min=1 max=10 id="qtd"
        <p class =  "valor_total"> ${itens.preco_produto}</p>
        <img src="img/excluir.png" id="btnexcluir">
        </div>`;
        lista_produtos_carrinho.innerHTML+=mont;
        
    })



}


