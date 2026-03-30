let notaSelecionada = 0;

function mostrarLivro(tipo) {

  const section = document.getElementById("livro");
  const body = document.body;

  let html = "";

  // 🌑 DARK
  if (tipo === "dark") {

    body.className = "tema-dark";

    const nomes = [
      "OBLÍVIO",
      "Quebrando o gelo",
      "O Príncipe Vampiro",
      "Love in the dark",
      "Kill Switch",
      "INCIPIT",
      "Nightfall",
      "Birthday Girl",
      "Conclave",
      "Desenfreados",
      "Na escuridão",
      "Hideaway",
      "Corrupt",
      "Terra do Nunca #2",
      "O abismo de Celina",
      "Assombrando Adeline",
      "Deuses de Neon",
      "Garotas Cruéis",
      "Garotos Cruéis",
      "Alchemised",
      "Príncipes da Terra",
      "Perseguindo Adeline",
      "Punk 57",
      "Punk 57 bônus",
      "Garotos Furiosos",
      "Rei da Terra",
      "Verity",
      "Rainha da Terra",
      "Scarlet Devotion"
    ];

    for (let i = 1; i <= nomes.length; i++) {
      html += `
        <div class="card">
          <img src="capas/dark/${i}.jpg"
               onerror="this.src='https://via.placeholder.com/200x300?text=Dark+${i}'">

          <div class="info">
            <h3>${nomes[i-1]} 🖤</h3>

            <a href="livros/dark/${i}.pdf" target="_blank">
              📖 Ler
            </a>
          </div>
        </div>
      `;
    }
  }

  // 💕 ROMANCE
  else if (tipo === "romance") {

    body.className = "tema-romance";

    const nomes = [
      "Binding 13",
      "Keeping 13",
      "Saving 6",
      "Redeeming 6",
      "Taming 7",
      "Releasing 10",
      "O acordo",
      "O erro",
      "O Jogo",
      "A Conquista",
      "O legado",
      "A guarda-costas",
      "A Hipótese do Amor (Novo Capítulo Extra)",
      "A Hipótese do Amor (Capítulo Extra)",
      "A razão do amor",
      "Amor, teoricamente",
      "A Hipótese do Amor",
      "Jogo de amor para dois",
      "Não é amor",
      "Xeque-mate",
      "No Fundo é Amor",
      "Um amor problemático de verão",
      "A mecanica do amor",
      "Amor corrompido ",
      "Amor e ódio",
      "Amor por Engano",
      "Melhor do Que Nos Filmes",
      "Não é como nos Filmes",
      "Amor em Roma",
      "Uma Farsa de Amor na Espanha (Conteúdo Extra)",
      "Uma farsa de amor na Espanha",
      "Um Experimento De Amor Em Nova York",
      "É assim que acaba",
      "É assim que começa",
      "November 9",
      "Até o Verão Terminar",
      "Mulher em queda",
      "Vergonha",
      "Café, amor e especiarias",
      "Como a neve cai",
      "Daisy Jones and The Six",
      "Patinando no amor",
      "Sapatilhas de gelo",
      "O beijo da neve",
      "Senhorita Aurora",
      "Para sempre seu",
      "Tudo o que Sobrou de Nós",
      "Puro impulso",
      "Uma segunda chance",
      "Enrolada em você",
      "Táticas do amor",
      "Teto Para Dois",
      "Tudo que deixamos inacabado",
      "Mil Beijos de Garoto",
      "Dates & Dragons",
      "Dungeons and Drama",
      "Eu E Esse Meu Coração",
      "Mentirosos",
      "Depois Daquele Verão",
      "Trilogia Verão (Box)",
      "Uma tempestade de verão",
      
      
    ];

    for (let i = 1; i <= nomes.length; i++) {
      html += `
        <div class="card">
          <img src="capas/romance/${i}.jpg"
               onerror="this.src='https://via.placeholder.com/200x300?text=Romance+${i}'">

          <div class="info">
            <h3>${nomes[i-1]} 💕</h3>

            <a href="livros/romance/${i}.pdf" target="_blank">
              📖 Ler
            </a>
          </div>
        </div>
      `;
    }
  }

  // 📜 CLÁSSICOS
  else if (tipo === "classicos") {

    body.className = "tema-classicos";

    const nomes = [
      "Box Grandes obras de Dostoiévski",
      "A Metamorfose",
      "Os Irmãos Karamázov",
      "Os Miseráveis",
      "A bruxa não vai para fogueira neste livro",
      "Quebre os seus sapatinhos de cristal",
      "A princesa salva a si mesma neste livro",
      "Textos Cruéis Demais Para Serem Lidos Rapidamente",
      
      
    ];

    for (let i = 1; i <= nomes.length; i++) {
      html += `
        <div class="card">
          <img src="capas/classicos/${i}.jpg"
               onerror="this.src='https://via.placeholder.com/200x300?text=Classico+${i}'">

          <div class="info">
            <h3>${nomes[i-1]} 📜</h3>

            <a href="livros/classicos/${i}.pdf" target="_blank">
              📖 Ler
            </a>
          </div>
        </div>
      `;
    }
  }

  // ✨ FANTASIA
  else if (tipo === "fantasia") {

    body.className = "tema-fantasia";

    const nomes = [
      "O Despertar da Lua Caída",
      "Caraval",
      "Lendário",
      "Finale",
      "Espetacular",
      "Era uma vez um coração partido",
      "A balada do felizes para nunca",
      "A maldição do verdadeiro amor",
      "Assistente do vilão",
      "Aprendiz do Vilão",
      "Aliada do vilão",
      "Noiva",
      "Parceira",
      "Lightlark",
      "Nightbane",
      "Estilhaça-me",
      "Liberta-me #2",
      "Incendeia-me #3",
      "Restaura-me #4",
      "Desafia-me #5",
      "imagine-me #6",
      "Unifica-me: Conto",
      "Destrua-me: Conto",
      "Fragmenta-me: Conto",
      "Aceita-me: Conto",
      "Divinos rivais",
      "Promessas cruéis",
      "A Biblioteca da Meia-Noite",
      "A vida invisível de Addie LaRue",
      "A contadora",
      "Box Série Divergente",
      "Jantar secreto",
      "The Powerless #1",
      "Reckless #2",
      "Powerful: Conto",
      "Fearless #3",
      "Quarta Asa",
      "Chama De Ferro #2",
      "Tempestade de ônix #3",
      "Manual de Assassinato para Boas Garotas",
      "Ala D",
      "Caçador sem coração",
      "Bruxa rebelde",
      "O detento",
      "O massacre da família Hope",
      "Trono de Vidro (Box)",
      "O Príncipe Cruel",
      "O rei perverso #2",
      "A Rainha do Nada #3",
      "Academia dos casos arquivados",
      "Instinto assassino #2",
      "Tudo ou Nada #3",
      "Conflitos de Sangue #4",
      "Uma janela sombria",
      "Duas coroas retorcidas",
      "De sangue e cinzas",
      "Um reino de carne e fogo #2",
      "A coroa de ossos quebrados #3",
      "A guerra das duas rainhas #4",
      "Uma alma de cinzas e sangue #5",
      "Box Jogos de Herança",
      "Corte de espinhos e rosas",
      "Corte de Névoa e Fúria #2",
      "Corte de Asas e Ruina #3",
      "Corte de Chamas Prateadas #4",
      "Corte de Gelo e Estrelas #5",
      "Box empregada",
    
    ];

    for (let i = 1; i <= nomes.length; i++) {
      html += `
        <div class="card">
          <img src="capas/fantasia/${i}.jpg"
               onerror="this.src='https://via.placeholder.com/200x300?text=Fantasia+${i}'">

          <div class="info">
            <h3>${nomes[i-1]} ✨</h3>

            <a href="livros/fantasia/${i}.pdf" target="_blank">
              📖 Ler
            </a>
          </div>
        </div>
      `;
    }
  }

  // 🔥 FINAL (MUITO IMPORTANTE)
  section.innerHTML = html;
}