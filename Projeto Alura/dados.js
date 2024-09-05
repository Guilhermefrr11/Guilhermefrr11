const TodosOsFeiticos = [
    {   
        titulo: "Accio",
        tipo: "Encantamento",
        descricao: "Este feitiço é usado para convocar objetos, ou seja, trazê-los até você.",
        significado: "No Latin, 'Accio' significa 'eu acho' ou 'eu convoco'",

},
    {
        titulo: "Aguamenti",
        tipo: "Encantamento",
        descricao: "Produz um jato de água pela ponta da varinha.",
        significado: "Em latim, 'aqua' significa 'água' e 'menti' está relacionado com 'mente', sugerindo a criação de água por meio da mente."
},
  
    {
        titulo: "Aparatação",
        tipo: "Transfiguração",
        descricao: "Permite ao bruxo se transportar instantaneamente de um lugar para outro.",
        significado: "A palavra 'aparatar' é uma criação do universo mágico de Harry Potter, sem uma origem latina direta."
},
  
    {
        titulo: "Aqua Eructo",
        descricao: "Produz um jato de água pela boca do conjurador.",
        tipo: "Transfiguração",
        significado: "Em latim, 'aqua' significa 'água' e 'eructo' significa 'arroto', indicando a produção de água pela boca."
},
    {
        titulo: "Cabeça de Bolha",
        tipo: "Encantamento",
        descricao: "Este feitiço cria uma bolha de ar em volta da cabeça de seu usuário, permitindo que o bruxo ou bruxa possa, por exemplo, respirar embaixo da água.",
        significado: "Este feitiço não teve suas palavras mágicas reveladas."
},

{
        titulo: "Capacious Extremis",
        tipo: "Encantamento",
        descricao: "Usado para expandir o interior de um objeto aparentemente pequeno, sem que afete sua aparência exterior.",
        significado: "Do inglês, 'Capacious' significa 'espaçoso'. Já 'extremis' parece vir da palavra 'extremo' do latim, cujo significado é o mesmo do português."
},

{
        titulo: "Chamas Azuis",
        descricao: "Cria chamas azuis que emitem luz e calor e são à prova d'água.",
        tipo: "Feitiço",
        significado: "Nos livros, este feitiço não teve suas palavras mágicas reveladas. Nos filmes, ele foi substituído pelo Lacarnum Inflamare, o Incendio e o Lumus Solem."
},
  
]; 

const inputBusca = document.getElementById('busca');
const botaoBusca = document.getElementById('botao-busca');
const resultados = document.getElementById('resultados');
const popupFeitico = document.getElementById('popupFeitico');
const fecharPopup = document.querySelector('.fechar-popup');

function buscarFeiticos() {
    // Limpa os resultados anteriores
    resultados.innerHTML = '';

    // Filtra os feitiços com base no input
    const termoBusca = inputBusca.value.toLowerCase();
    const resultadosFiltrados = TodosOsFeiticos.filter(feitico =>
        feitico.titulo.toLowerCase().includes(termoBusca)
    );

    // Exibe os resultados filtrados
    resultadosFiltrados.forEach(feitico => {
        const p = document.createElement('p');
        p.textContent = `${feitico.titulo} - ${feitico.tipo}`;
        
        // Quando clicar no resultado, abre o pop-up
        p.addEventListener('click', () => {
            // Preenche o pop-up com as informações do feitiço
            document.getElementById('tituloFeitico').textContent = feitico.titulo;
            document.getElementById('tipoFeitico').textContent = `Tipo: ${feitico.tipo}`;
            document.getElementById('descricaoFeitico').textContent = `Descrição: ${feitico.descricao}`;
            document.getElementById('significadoFeitico').textContent = `Significado: ${feitico.significado}`;
            
            // Exibe o pop-up
            popupFeitico.style.display = 'block';
        });

        resultados.appendChild(p);
    });
}

// Fecha o pop-up quando clicar no botão de fechar
fecharPopup.addEventListener('click', () => {
    popupFeitico.style.display = 'none';
});

// Executa a busca ao clicar no botão
botaoBusca.addEventListener('click', buscarFeiticos);