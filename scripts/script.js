const botao = document.getElementById('botao-tema'); //pego o id botao-tema no HTML
const body = document.body // pego o body no HTML

/* Persistência do tema */
const temaSalvo = localStorage.getItem('tema');
temaEscuro(temaSalvo === 'escuro');

/* Função para alterar entre tema claro e escuro */
function temaEscuro(tipo){
    if (tipo == true) {
        body.classList.add('escuro'); 
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>';//caso eu clique e esteja no modo claro ele vai colocar no modo escuro e mudar o icone para um sol
    }else{
        body.classList.remove('escuro')
        botao.innerHTML = '<i class="fa-solid fa-moon">'
    } // caso eu clique quando estiver escuro vai "remover" o tema escuro e voltar para o normal(tema claro)
}

botao.addEventListener('click', () => { //colou o evento de clique no botao de id botao-tema
    const isEscuro = body.classList.toggle('escuro');
    temaEscuro(isEscuro);
    localStorage.setItem('tema', isEscuro ? 'escuro' : 'claro')

})




/* Scroll suava para links de navegaçõa */
const navLinks = document.querySelectorAll('#menu ul a.link'); // a constante navLinks recebe do <ul> que ta dentro do #menu todas as tags <a> que tem a classe .link.

navLinks.forEach(link => { // pega todos as ancoras(<a>) da classe link e para cada uma delas vai se executado essa arow funtion.
    link.addEventListener('click', function(e){ // aguarda o clique nos icone do menu de navegação
        e.preventDefault(); //quando clicar ele vai primeiro evitar o comportamento padrão
        const target = document.querySelector(this.getAttribute('href')); // target recebe o href que esta no menu dentrio do HTML

        if(target){ // se eu tiver um target
            const headerHeight = document.querySelector('header').offsetHeight // pega a altura do header 
            const targetPosition = target.offsetTop - headerHeight - 20; // movo do mesmo tamanho do header menos 20.
            window.scrollTo({ 
                top: targetPosition,
                behavior: 'smooth'
            }); // faz uma rolagem do tipo smooth(suave)

        };

    });

});