
// variaveis globais

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15 //############################  ALTERA O TEMPO DO CRONOMETRO   ############################

var criaMosquitoTempo = 2000

//função de nivel

var nivel = window.location.search // localização na janela o valor da string que vem da pagina index.html
nivel = nivel.replace('?', '') //remove o ponto de interrogação da string e passa o valor vazio

//niveis do jogo

if(nivel === 'facil') {
	criaMosquitoTempo = 1500
} else if(nivel === 'normal') {
	//800
	criaMosquitoTempo = 1400
} else if (nivel === 'dificil') {
	//600
	criaMosquitoTempo = 1000
}
else if (nivel === 'Mortal') {
	//
	criaMosquitoTempo = 1
}

function ajustaTamanhoPalcoJogo() { // funçao ajuste da tela(ambiente do jogo)
	altura = window.innerHeight // altura da janela
	largura = window.innerWidth  // largura da janela

	console.log(largura, altura) // mostrando configurações no console
}

ajustaTamanhoPalcoJogo() // chamando a função ajustaTamanhoPalcoJogo

var cronometro = setInterval(function() { 

	tempo -= 1 //decremento da variavel tempo

	if(tempo < 0) {
		clearInterval(cronometro)//se tempo for menor que zero limpe a função(pare o cronometro)
		clearInterval(criaMosca)// se tempo for menor que zero limpe criamosca(pare de criar mosca)
		window.location.href = 'vitoria.html' // vá para a pagina vitoria
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	 
	  
	
}, 1000)



function posicaoRandomica() {
	//remover o mosquito anterior (caso exista)
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
	// se o mosquito for removido ao clicar essa logica não será usado portanto nos pontos de vida não serão alterados
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

	if(document.getElementById('mosquito')) { // passa o elemento a ser analisado(se elemento for encontrado)
		document.getElementById('mosquito').remove() // remova mosquito automaticament
		//o mosquito deve ser removido ao clicar caso isso n/ao aconteça
		//vamos entrar nessa estruruta de repetição:

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 5) { //variavel vidas =1
			//se vidas for maior que 3 vá para a pagina fim do jogo

			window.location.href = 'fim_de_jogo.html' 

			/*se não for para a pagina fim do jogo a imagem do coração cheio sera trocada por imagem coração vazio
			e a variavel vidas recebe mais 1 incremento */

		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"//concatenação de v com variavel vidas = (v1)

			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90 // criando posição aleatoria esse 90 negativo e para o objeto não sai área da tela
	var posicaoY = Math.floor(Math.random() * altura) - 90 // criando posição aleatoria

//operador ternaria(funciona como if)
// se posição for menor que zero ela recebe zero... se não ela recebe ela mesmo
	posicaoX = posicaoX < 0 ? 0 : posicaoX // se posição no eixo x for menor que zero e ele recebe zero... se não ela recebe ela mesmo
	posicaoY = posicaoY < 0 ? 0 : posicaoY//// se posição no eixo y for menor que zero e ele recebe zero... se não ela recebe ela mesmo

	console.log(posicaoX, posicaoY) // mostrar posição no console

	//criar o elemento html MOSQUITO
	var mosquito = document.createElement('img') //cria elemnto apartir da tag img
	mosquito.src = 'imagens/bruxa.png' // imagem do mosquito passa o local e a imagem para criar o elemnto
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() // gera mosquito de acordo com as funções(tamanhoaleatorio e ladoaleatorio)
	mosquito.style.left = posicaoX + 'px' //cria a imagem do mosquito no eixo x
	mosquito.style.top = posicaoY + 'px' //cria a imagem do mosquito no top
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito' // referenciando o mosquito (id = identificação unica )
	mosquito.onclick = function() { // ao clicar no mosquito ele e removido
		this.remove()// faz referencia ao elemento(remova esta elemento) ao clicar no elemento ele e removido
	}

	document.body.appendChild(mosquito) } // criando uma imagem filho no body(acrecenta um item a uma lista)

function tamanhoAleatorio() { // muda o tamanho do mosquito(gera mosquitos de tamanho aleatorio de acordo com a classe)
	var classe = Math.floor(Math.random() * 3) //gera numeros aleatorios entre 0 e 3

	//switch funciona de forma analoga ao if avaliando os casos
	
	switch(classe) { // de acordo com o caso o mosquito muda de tamanho
		case 0: // se caso o numero gerado for 0 gera o mosquito com as propriedades da classe mosquito1
			return 'mosquito1' // classe mosquito 1 no css
		
		case 1: // se caso o numero gerado for 1 gera o mosquito com as propriedades da classe mosquito2
			return 'mosquito2' // classe mosquito 2 no css

		case 2: // se caso o numero gerado for 2 gera o mosquito com as propriedades da classe mosquito3
			return 'mosquito3'// classe mosquito 3 no css
	}
}

function ladoAleatorio() { // muda o lado que o mosquito estar virado direita ou esquerda
	var classe = Math.floor(Math.random() * 2) //gera numeros aleatorios entre 0 e 2

	//switch funciona de forma analoga ao if avaliando os casos
	
	switch(classe) { 
		case 0: // se caso o numero gerado for 0 gera o mosquito com as propriedades da classe ladoA
			return 'ladoA'
		
		case 1: // se caso o numero gerado for 1 gera o mosquito com as propriedades da classe ladoB
			return 'ladoB'

	}
}

