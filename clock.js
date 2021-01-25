var tamanhoRelogio = 500;
var corNumero = "#eee";
var corFundo = "#292929";
var corSegundos = "#c71616";
var corMinutos = "#6f6f6f";
var corHoras = "#6f6f6f";
var corDot = "#c71616";

function relogioAnalog(id) {


	this.foreColor = corNumero;
	this.bgColor = corFundo;
	this.width = tamanhoRelogio;

	this.container = document.getElementById(id);

    //Criando Relógio

    //Criando Molde do Relógio
    var molde = document.createElement("div");
    //CSS do Molde
    molde.style.borderRadius = "50%";
	molde.style.backgroundColor = this.bgColor;
	molde.style.border = "solid 2px #fff";
	molde.style.width = this.width + "px";
	molde.style.height = this.width + "px";
	molde.style.position = "relative";
	this.container.appendChild(molde);

    //Colocando Marca no relógio
    var marca = document.createElement("h4");
    marca.style.width = "100%";
    marca.style.fontSize = this.width / 25 + "px";
    marca.style.marginTop = this.width * 0.8 + "px";
    marca.style.color = this.foreColor;
    marca.innerHTML = 'Quartz';
    molde.appendChild(marca);

	//Colocando os números no molde
    var numeros = document.createElement("numeros");
    //CSS do local dos números
    numeros.style.height = "100%";
	numeros.style.padding = "0";
	numeros.style.margin = "0";
	numeros.style.listStyle = "none"; //Tirar "dots"
	numeros.style.position = "absolute";
	numeros.style.width = 40 + "px";
	numeros.style.top = 0;
	numeros.style.left = this.width / 2 - 20 + "px";
	numeros.style.color = this.foreColor;
	molde.appendChild(numeros);

	//Iterando para criar os números
	for (var i = 0; i <= 5; i++) {
        //Lista
        var lista = document.createElement("li");
        lista.style.padding = "0";
		lista.style.margin = "0";
		lista.style.position = "absolute";
		lista.style.width = "40px";
		lista.style.height = this.width + "px";
		lista.style.fontSize = this.width / 10 + "px";
		numeros.appendChild(lista);

		lista.style.transform = "rotate(" + 360 / 12 * (i + 1) + "deg)";

        //Numeros na parte de cima da lista
		var numerosCima = document.createElement("div");
		numerosCima.style.width = "100%";
		numerosCima.style.position = "absolute";
		numerosCima.innerHTML = i + 1;
		lista.appendChild(numerosCima);

        numerosCima.style.transform = "rotate(" + -360 / 12 * (i + 1) + "deg)";
        
        //Números na parte de baixo da lista
		var numerosBaixo = document.createElement("div");
		numerosBaixo.style.width = "100%";
		numerosBaixo.style.position = "absolute";
		numerosBaixo.style.bottom = "0";
		numerosBaixo.innerHTML = i + 7;
		lista.appendChild(numerosBaixo);

		numerosBaixo.style.transform = "rotate(" + -360 / 12 * (i + 1) + "deg)";
	}


	//Palito da Hora
    var hora = document.createElement("div");
    var horaWidth = this.width * 0.01;
    var horaTop = this.width * 0.3 - (horaWidth * 0.5);
	var horaleft = this.width * 0.5 - horaWidth * 0.5;
	hora.style.width = horaWidth + "px";
	hora.style.height = horaWidth + "px";
	hora.style.position = "absolute";
	hora.style.border = "solid 0px transparent";
	hora.style.left = horaleft + "px";
	hora.style.top = horaTop + "px";
	hora.style.borderTop = "solid " + (this.width * 0.5 - horaTop) + "px " + corHoras;
	hora.style.borderBottomWidth = (this.width * 0.5 - horaTop) + "px";
	molde.appendChild(hora);

	//Palito do minuto
    var minuto = document.createElement("div");
    var minutoWidth = this.width * 0.008;
	var minutoTop = this.width * 0.12 - (minutoWidth * 0.5);
	var minutoleft = this.width * 0.5 - minutoWidth * 0.5;
	minuto.style.width = minutoWidth + "px";
	minuto.style.height = minutoWidth + "px";
	minuto.style.position = "absolute";
	minuto.style.border = "solid 0px transparent";
	minuto.style.left = minutoleft + "px";
	minuto.style.top = minutoTop + "px";
	minuto.style.borderTop = "solid " + (this.width * 0.5 - minutoTop) + "px " + corMinutos;
    minuto.style.borderBottomWidth = (this.width * 0.5 - minutoTop) + "px";
    molde.appendChild(minuto);

	//Palito do segundo
    var segundo = document.createElement("div");
    var segundoWidth = 1;
    var segundoTop = this.width * 0.05;
	segundo.style.width = segundoWidth + "px";
	segundo.style.height = segundoWidth + "px";
	segundo.style.position = "absolute";
	segundo.style.border = "solid 0px transparent";
	segundo.style.left = (this.width * 0.5 - segundoWidth) + "px";
	segundo.style.top = segundoTop + "px";
	segundo.style.borderTop = "solid " + (this.width * 0.5 - segundoTop) + "px " + corSegundos;
    segundo.style.borderBottomWidth = (this.width * 0.5 - segundoTop) + "px";
    molde.appendChild(segundo);

	//Ponto central
    var ponto = document.createElement("div");
    var pontoWidth = this.width * 0.025;
	ponto.style.width = pontoWidth + "px";
	ponto.style.height = pontoWidth + "px";
	ponto.style.position = "absolute";
	ponto.style.backgroundColor = corDot;
	ponto.style.left = this.width * 0.5 - (pontoWidth * 0.5) + "px";
	ponto.style.top = this.width * 0.5 - (pontoWidth * 0.5) + "px";
    ponto.style.borderRadius = "50%";
    molde.appendChild(ponto);


	//Rotação do Relógio
	this.loop = setInterval(function () {
		var hoje = new Date();

		var anguloSegundos = 360 / 60 * hoje.getSeconds();
		var anguloMinutos = 360 / 60 * hoje.getMinutes();
		var anguloHoras = 360 / 12 * (hoje.getHours() % 12) + 360 / 12 * (hoje.getMinutes() / 60);

		segundo.style.transform = 'rotate(' + anguloSegundos + 'deg)';
		minuto.style.transform = 'rotate(' + anguloMinutos + 'deg)';
		hora.style.transform = 'rotate(' + anguloHoras + 'deg)';
	}, 1000);
}
