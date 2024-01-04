var listaItensArmas = [
    { nome: 'Adaga', preco: 2 },
    { nome: 'Espada curta', preco: 10 },
    { nome: 'Foice', preco: 4 },
    { nome: 'Clava', preco: 0 },
    { nome: 'Lança', preco: 2 },
    { nome: 'Maça', preco: 12 },
    { nome: 'Bordão', preco: 0 },
    { nome: 'Pique', preco: 2 },
    { nome: 'Tacape', preco: 0 },
    { nome: 'Azagaia', preco: 1 },
    { nome: 'Besta leve', preco: 35 },
    { nome: 'Virotes (20)', preco: 2 },
    { nome: 'Funda', preco: 0 },
    { nome: 'Pedras (20)', preco: 0.5 },
    { nome: 'Arco curto', preco: 30 },
    { nome: 'Flechas (20)', preco: 1 },
    { nome: 'Machadinha', preco: 6 },
    { nome: 'Cimitarra', preco: 15 },
    { nome: 'Espada longa', preco: 15 },
    { nome: 'Florete', preco: 20 },
    { nome: 'Machado de batalha', preco: 10 },
    { nome: 'Mangual', preco: 8 },
    { nome: 'Martelo de guerra', preco: 12 },
    { nome: 'Picareta', preco: 8 },
    { nome: 'Tridente', preco: 15 },
    { nome: 'Alabarda', preco: 10 },
    { nome: 'Alfange', preco: 75 },
    { nome: 'Gadanho', preco: 18 },
    { nome: 'Lança montada', preco: 10 },
    { nome: 'Machado de guerra', preco: 20 },
    { nome: 'Marreta', preco: 20 },
    { nome: 'Montante', preco: 50 },
    { nome: 'Arco longo', preco: 100 },
    { nome: 'Besta pesada', preco: 50 },
    { nome: 'Chicote', preco: 2 },
    { nome: 'Espada bastarda', preco: 35 },
    { nome: 'Katana EXOT', preco: 100 },
    { nome: 'Machado anão EXOT', preco: 30 },
    { nome: 'Corrente de espinhos EXOT', preco: 25 },
    { nome: 'Machado táurico EXOT', preco: 50 },
    { nome: 'Rede', preco: 20 },
    { nome: 'Pistola ILEGAL', preco: 250 },
    { nome: 'Balas ILEGAL (20)', preco: 20 },
    { nome: 'Mosquete ILEGAL', preco: 500 },
    { nome: 'Porrete', preco: 2 },
    { nome: 'Zarabatana', preco: 5 },
    { nome: 'Neko-te EXOT', preco: 10 },
    { nome: 'Gládio', preco: 12 },
    { nome: 'Tetsubo', preco: 20 },
    { nome: 'Traque ILEGAL', preco: 75 },
    { nome: 'Arcabuz ILEGAL', preco: 800 },
    { nome: 'Bacamarte ILEGAL', preco: 450 },
    { nome: 'Açoite finntroll EXOT', preco: 30 },
    { nome: 'Espada vespa EXOT', preco: 75 },
    { nome: 'Pistola-punhal ILEGAL EXOT', preco: 300 },
    { nome: 'Mordida do diabo EXOT', preco: 30 },
    { nome: 'Presa de serpente EXOT', preco: 1000 },
    { nome: 'Lança de fogo EXOT ILEGAL', preco: 1000 },
    { nome: 'Shuriken EXOT', preco: 1 },
    { nome: 'Arpão', preco: 30 }
];

var listaItensGerais = [
    { nome: 'Água benta', preco: 10 },
    { nome: 'Algemas', preco: 15 },
    { nome: 'Arpéu', preco: 5 },
    { nome: 'Bandoleira de poções', preco: 20 },
    { nome: 'Barraca', preco: 10 },
    { nome: 'Corda', preco: 1 },
    { nome: 'Espelho', preco: 10 },
    { nome: 'Lampião', preco: 7 },
    { nome: 'Mochila', preco: 2 },
    { nome: 'Mochila de aventureiro', preco: 50 },
    { nome: 'Óleo', preco: 0.1 },
    { nome: 'Organizador de pergaminhos', preco: 25 },
    { nome: 'Pé de cabra', preco: 2 },
    { nome: 'Saco de dormir', preco: 1 },
    { nome: 'Símbolo sagrado', preco: 5 },
    { nome: 'Tocha', preco: 0.1 },
    { nome: 'Vara de madeira (3m)', preco: 0.2 },
    { nome: 'Alaúde élfico', preco: 300 },
    { nome: 'Coleção de livros', preco: 75 },
    { nome: 'Equipamento de viagem', preco: 10 },
    { nome: 'Estojo de disfarces', preco: 50 },
    { nome: 'Flauta mística', preco: 150 },
    { nome: 'Gazua', preco: 5 },
    { nome: 'Instrumentos de <ofício>', preco: 30 },
    { nome: 'Instrumento musical', preco: 35 },
    { nome: 'Luneta', preco: 100 },
    { nome: 'Maleta de medicamentos', preco: 50 },
    { nome: 'Sela', preco: 20 },
    { nome: 'Tambor das profundezas', preco: 80 }
];

var listaItensVestuario = [
    { nome: 'Andrajos de aldeão', preco: 1 },
    { nome: 'Bandana', preco: 5 },
    { nome: 'Botas reforçadas', preco: 20 },
    { nome: 'Camisa bufante', preco: 25 },
    { nome: 'Capa esvoaçante', preco: 25 },
    { nome: 'Capa pesada', preco: 15 },
    { nome: 'Casaco longo', preco: 20 },
    { nome: 'Chapéu arcano', preco: 50 },
    { nome: 'Enfeite de elmo', preco: 15 },
    { nome: 'Farrapos de ermitão', preco: 1 },
    { nome: 'Gorro de ervas', preco: 75 },
    { nome: 'Luva de pelica', preco: 5 },
    { nome: 'Manopla', preco: 10 },
    { nome: 'Manto camuflado', preco: 12 },
    { nome: 'Manto eclesiástico', preco: 20 },
    { nome: 'Robe místico', preco: 50 },
    { nome: 'Sapatos de camurça', preco: 8 },
    { nome: 'Tabardo', preco: 10 },
    { nome: 'Traje da corte', preco: 100 },
    { nome: 'Traje de viajante', preco: 10 },
    { nome: 'Veste de seda', preco: 25 }
];

var listaItensEsotericos = [
    { nome: 'Bolsa de pó', preco: 300 },
    { nome: 'Cajado arcano', preco: 1000 },
    { nome: 'Cetro elemental', preco: 750 },
    { nome: 'Costela de lich', preco: 300 },
    { nome: 'Dedo de ente', preco: 200 },
    { nome: 'Luva de ferro', preco: 150 },
    { nome: 'Medalhão de prata', preco: 750 },
    { nome: 'Orbe cristalino', preco: 750 },
    { nome: 'Tomo hermético', preco: 1500 },
    { nome: 'Varinha arcana', preco: 100 }
];

var listaItensAlquimicos = [
    { nome: 'Ácido PERMISSÃO', preco: 10 },
    { nome: 'Bálsamo restaurador', preco: 10 },
    { nome: 'Bomba PERMISSÃO', preco: 50 },
    { nome: 'Cosmético', preco: 30 },
    { nome: 'Elixir do amor SEMI-ILEGAL', preco: 100 },
    { nome: 'Essência de mana', preco: 50 },
    { nome: 'Fogo alquímico PERMISSÃO', preco: 10 },
    { nome: 'Pó do desaparecimento', preco: 100 },
    { nome: 'Baga-de-fogo', preco: 30 },
    { nome: 'Dente-de-dragão', preco: 45 },
    { nome: 'Essência abissal', preco: 150 },
    { nome: 'Líquen lilás', preco: 30 },
    { nome: 'Musgo púrpura', preco: 45 },
    { nome: 'Ossos de monstro', preco: 4 },
    { nome: 'Pó de cristal', preco: 30 },
    { nome: 'Pó de giz', preco: 30 },
    { nome: 'Ramo verdejante', preco: 45 },
    { nome: 'Saco de sal', preco: 45 },
    { nome: 'Seixo de âmbar', preco: 30 },
    { nome: 'Terra de cemitério', preco: 30 }
];

var listaItensContrabando = [
    { nome: 'Beladona ILEGAL', preco: 1500 },
    { nome: 'Bruma sonolenta ILEGAL', preco: 150 },
    { nome: 'Cicuta ILEGAL', preco: 60 },
    { nome: 'Essência de sombra ILEGAL', preco: 100 },
    { nome: 'Névoa tóxica ILEGAL', preco: 30 },
    { nome: 'Peçonha comum ILEGAL', preco: 15 },
    { nome: 'Peçonha concentrada ILEGAL', preco: 90 },
    { nome: 'Peçonha potente ILEGAL', preco: 600 },
    { nome: 'Pó de lich ILEGAL', preco: 3000 },
    { nome: 'Riso de Nimb ILEGAL', preco: 150 }
];

var listaModificacoesArmas = ['Certeira', 'Pungente(2mod)', 'Cruel', 'Atroz(2mod)', 'Equilibrada', 'Harmonizada', 'Injeção alquímica', 'Maciça', 'Material Especial', 'Mira Telescopica(ranged)', 'Precisa'];

var listaEncantamentosArmas = ['Ameaçadora', 'Anticriatura', 'Arremesso', 'Assassina', 'Caçadora', 'Congelante', 'Conjuradora', 'Corrosiva', 'Dançarina', 'Defensora', 'Destruidora', 'Dilacerante', 'Drenante', 'Elétrica', 'Energética (Formid)', 'Excruciante', 'Flamejante', 'Formidável', 'Lancinante (dilac)', 'Magnífica (Formid)', 'Piedosa', 'Profana', 'Sagrada', 'Sanguinária', 'Trovejante', 'Tumular', 'Veloz', 'Venenosa']


var listaArmasEspecificas = [
    { nome: 'Azagaia dos relâmpagos', preco: 30000 },
    { nome: 'Espada baronial', preco: 30000 },
    { nome: 'Lâmina da luz', preco: 45000 },
    { nome: 'Lança animalesca', preco: 45000 },
    { nome: 'Maça do terror', preco: 45000 },
    { nome: 'Florete fugaz', preco: 50000 },
    { nome: 'Cajado da destruição', preco: 60000 },
    { nome: 'Cajado da vida', preco: 60000 },
    { nome: 'Machado silvestre', preco: 70000 },
    { nome: 'Martelo de Doherimm', preco: 70000 },
    { nome: 'Arco do poder', preco: 90000 },
    { nome: 'Língua do deserto', preco: 90000 },
    { nome: 'Besta explosiva', preco: 100000 },
    { nome: 'Punhal sszzaazita', preco: 100000 },
    { nome: 'Espada sortuda', preco: 110000 },
    { nome: 'Avalanche', preco: 140000 },
    { nome: 'Cajado do poder', preco: 180000 },
    { nome: 'Vingadora sagrada', preco: 200000 }
];




function gerarLoja() {
    var tipoLoja = document.getElementById('tipoLoja').value;
    var taxaVariacao = parseFloat(document.getElementById('taxaVariacao').value) || 0;
    var quantidadeItens = parseInt(document.getElementById('quantidadeItens').value) || 0;

    var loja = document.getElementById('loja');
    loja.innerHTML = ''; // Limpa o conteúdo anterior

    var itensLoja = [];
    var tipo = 0; // tipo = 0 itens / tipo = 1 armas / tipo = 2 mods

    switch (tipoLoja) {
        case 'itensGerais':
            itensLoja = gerarItensAleatorios(listaItensGerais, taxaVariacao, quantidadeItens, tipo);
            break;
        case 'vestuario':
            itensLoja = gerarItensAleatorios(listaItensVestuario, taxaVariacao, quantidadeItens, tipo);
            break;
        case 'esotericos':
            itensLoja = gerarItensAleatorios(listaItensEsotericos, taxaVariacao, quantidadeItens, tipo);
            break;
        case 'alquimicos':
            itensLoja = gerarItensAleatorios(listaItensAlquimicos, taxaVariacao, quantidadeItens, tipo);
            break;
        case 'contrabando':
            itensLoja = gerarItensAleatorios(listaItensContrabando, taxaVariacao, quantidadeItens, tipo);
            break;
        case 'armas':
            tipo = 1;
            itensLoja = gerarItensAleatorios(listaItensArmas, taxaVariacao, quantidadeItens, tipo);
            break;
        case 'modsArmas':
            tipo = 2;
            itensLoja = gerarItensAleatorios(listaModificacoesArmas, taxaVariacao, quantidadeItens, tipo);
            break;
        case 'encanArmas':
            tipo = 2; // Alterei para tipo 3 (correspondendo a encantamentos)
            itensLoja = gerarItensAleatorios(listaEncantamentosArmas, taxaVariacao, quantidadeItens, tipo);
            break;
        // Adicione mais casos conforme necessário
    }

    var numeroModificacoes = 0;
    // Adiciona os itens à loja
    for (var i = 0; i < itensLoja.length; i++) {
        numeroModificacoes = gerarNumeroModificacoes();
        var chance = Math.random();

        // Defina as probabilidades
        var categoriaAleatoria;
        if (chance <= 0.7) {
            categoriaAleatoria = 'NORMAL';
        } else if (chance <= 0.75) {
            categoriaAleatoria = 'ESCASSO';
        } else {
            categoriaAleatoria = 'ABUNDANTE';
        }


        if (tipo === 0) {
            var item = document.createElement('p');
            item.textContent = `${itensLoja[i].nome} - T$ ${itensLoja[i].preco.toFixed(2)} - Quantidade: ${categoriaAleatoria}`;
            loja.appendChild(item);
        }

        if (tipo === 1) {
            var item = document.createElement('p');
            item.textContent = `${itensLoja[i].nome} - T$ ${itensLoja[i].preco.toFixed(2)} - Modificações: ${numeroModificacoes} `;
            loja.appendChild(item);
        }

        if (tipo === 2) {
            var item = document.createElement('p');
            item.textContent = `${itensLoja[i].nome}`;
            loja.appendChild(item);
        }
    }

}


function gerarNumeroModificacoes() {
    var chance = Math.random();
    if (chance <= 0.5) {
        return 1;
    } else if (chance <= 0.7) {
        return 2;
    } else if (chance <= 0.8) {
        return 3;
    } else if (chance <= 0.95) {
        return 4;
    } else {
        return 0;
    }
}




function gerarItensAleatorios(listaItens, percentualAumento, quantidade, tipo) {
    if (tipo === 0) {
        // Código para itens gerais (itens únicos)
        var itensUnicos = Array.from(new Set(listaItens.map(item => item.nome)));
        var itensDisponiveis = listaItens.slice();

        // Embaralha aleatoriamente os itens únicos
        for (var i = itensUnicos.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [itensUnicos[i], itensUnicos[j]] = [itensUnicos[j], itensUnicos[i]];
        }

        return Array.from({ length: Math.min(quantidade, itensUnicos.length) }, function () {
            var nomeItem = itensUnicos.shift();
            var itemOriginal = itensDisponiveis.find(item => item.nome === nomeItem);

            var variacao = percentualAumento / 100;
            var ajuste = (Math.random() < 0.5 ? -1 : 1) * Math.random() * variacao * itemOriginal.preco;
            var precoFinal = itemOriginal.preco + ajuste;

            // Remove o item da lista disponível para garantir que não seja escolhido novamente
            itensDisponiveis = itensDisponiveis.filter(item => item.nome !== nomeItem);

            // Limita o número de casas decimais para dois
            var precoFormatado = parseFloat(precoFinal.toFixed(1));

            return { nome: nomeItem, preco: Math.max(0.1, precoFormatado) };
        });

    } else if (tipo === 1) {
        // Código para armas
        var itensDisponiveis = listaItens.slice();

        // Adiciona a chance de incluir uma Arma Específica (10% de chance) ajustar conforme necessario
        var chanceArmaEspecifica = Math.random();
        if (chanceArmaEspecifica <= 0.10) {
            var indiceArmaEspecifica = Math.floor(Math.random() * listaArmasEspecificas.length);
            var armaEspecifica = listaArmasEspecificas[indiceArmaEspecifica];
            var variacao = percentualAumento / 100;
            var ajuste = (Math.random() < 0.5 ? -1 : 1) * Math.random() * variacao * armaEspecifica.preco;
            var precoFinal = armaEspecifica.preco + ajuste
            return [{ nome: armaEspecifica.nome, preco: precoFinal }];
        }



        return Array.from({ length: quantidade }, function () {
            var nomeItem = itensDisponiveis[Math.floor(Math.random() * itensDisponiveis.length)].nome;
            var itemOriginal = listaItens.find(item => item.nome === nomeItem);

            var variacao = percentualAumento / 100;
            var ajuste = (Math.random() < 0.5 ? -1 : 1) * Math.random() * variacao * itemOriginal.preco;
            var precoFinal = itemOriginal.preco + ajuste;

            // Limita o número de casas decimais para dois
            var precoFormatado = parseFloat(precoFinal.toFixed(1));

            return { nome: nomeItem, preco: Math.max(0.1, precoFormatado) };
        });

    } else if (tipo == 2) {
        // Gera itens da listaModificacoesArmas que podem ser repetidos
        return Array.from({ length: quantidade }, function () {
            var nomeModificacao = listaItens[Math.floor(Math.random() * listaItens.length)];

            return { nome: nomeModificacao, preco: 0 }; // O preço é 0 para itens de modificação
        });
    }

   
}



