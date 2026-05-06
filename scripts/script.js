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