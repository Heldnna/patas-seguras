// Componente de Cabeçalho
function criarCabecalho() {
    const header = document.createElement("header");

    // Logo
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    const logoH1 = document.createElement("h1");
    logoH1.textContent = "Patas Seguras";
    logoDiv.appendChild(logoH1);

    // Menu de Navegação
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const menuItens = [
        { nome: "Início", link: "index.html" },
        { nome: "Educação", link: "educacao.html" }, // Alterado para link de ancoragem
        { nome: "Adoção", link: "adocao.html" }, // Alterado para link de ancoragem
        { nome: "Castração", link: "castracao.html" }, // Alterado para link de ancoragem
        { nome: "Sobre", link: "sobre.html" },
        { nome: "Contato", link: "contato.html" }
    ];

    menuItens.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.nome;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(logoDiv);
    header.appendChild(nav);

    return header;
}

// Componente de Rodapé
function criarRodape() {
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.innerHTML = "&copy; 2025 Patas Seguras. Todos os direitos reservados.";
    footer.appendChild(p);
    return footer;
}

// Função para adicionar os componentes à página
function adicionarComponentes() {
    document.body.prepend(criarCabecalho());
    document.body.appendChild(criarRodape());
}

// Chamada para carregar os componentes quando a página for carregada
document.addEventListener("DOMContentLoaded", adicionarComponentes);
