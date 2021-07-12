var botaoAdicionar = document.querySelector("#adicionar-paciente");


botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //Pegando os dados do form
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //Criando um Tr para guardar os dados dentro 
    var pacienteTr = document.createElement("tr");

    // Criando um para cada dado 
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");


    //Preenchendo os Tds com os valores que trouxemos do form
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //Colocando os Tds dentro do Tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);


    // Pegando a tabela de pacientes(tbody) e armazenando dentro da variável tabela
    var tabela = document.querySelector("#tabela-pacientes");

    // Trazendo o Tr que criamos para dentro da tabela (tbody) que já existia lá no HTML
    tabela.appendChild(pacienteTr);
});
