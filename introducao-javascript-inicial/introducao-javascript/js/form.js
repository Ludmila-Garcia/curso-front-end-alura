var botaoAdicionar = document.querySelector("#adicionar-paciente");


botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
     //Pegando os dados do form pelo id #form-adiciona
    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    if (!validaPaciente(paciente)) {
        console.log("Paciente inválido");
        return;
    }


    //Criando Tr do paciente 
    var pacienteTr = montaTr(paciente);

    //Adicionando o paciente na tabela, pegando a tabela de pacientes(tbody) e armazenando dentro da variável tabela
    var tabela = document.querySelector("#tabela-pacientes");

    // Trazendo o Tr que criamos para dentro da tabela (tbody) que já existia lá no HTML
    tabela.appendChild(pacienteTr);

    //Limpando os campos depois de adicionar um paciente.
    form.reset();
});

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

// Função para criar Tr do paciente
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Colocando os Tds dentro do Tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}

function validaPaciente(paciente){
    if(paciente.altura < 3.0 && paciente.altura >= 0){
        return true;
    }
}