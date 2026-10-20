/* ==========================================================================
   Agentes de IA e acesso não autorizado a sistemas governamentais
   main.js — comportamento do site
   --------------------------------------------------------------------------
   Cuida apenas de comportamento. Nada de texto ou cor mora aqui.

     1. Marca no menu a seção que está visível
     2. Mostra e esconde o botão "voltar ao topo"
     3. Abre a pergunta do FAQ quando o link traz a âncora direto para ela
     4. Atualiza o ano do rodapé sozinho
   ========================================================================== */

(function () {
  'use strict';

  /* ======================================================================
     CONFIGURAÇÃO
     Se renomear uma classe no HTML, ajuste o seletor aqui.
     ====================================================================== */

  var CONFIG = {
    linkMenu:      '.nav a[href^="#"]',
    classeAtivo:   'ativo',
    botaoAoTopo:   '.ao-topo',
    classeVisivel: 'visivel',
    alturaDoBotao: 400,   // px rolados para o botão aparecer
    folgaDoMenu:   92     // px de folga por causa do menu fixo
  };


  /* ======================================================================
     AUXILIAR — executa no máximo uma vez por quadro de animação
     ====================================================================== */

  function limitarPorQuadro(fn) {
    var agendado = false;

    return function () {
      if (agendado) return;
      agendado = true;
      window.requestAnimationFrame(function () {
        agendado = false;
        fn();
      });
    };
  }


  /* ======================================================================
     1. MENU — MARCA A SEÇÃO VISÍVEL
     ====================================================================== */

  function iniciarMenuAtivo() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll(CONFIG.linkMenu)
    );

    if (!links.length) return;

    var secoes = links.map(function (link) {
      var href = link.getAttribute('href');
      return href && href.charAt(0) === '#' ? document.getElementById(href.slice(1)) : null;
    });

    var atualizar = limitarPorQuadro(function () {
      var posicao = window.scrollY + CONFIG.folgaDoMenu;
      var indiceAtual = 0;

      secoes.forEach(function (secao, i) {
        if (secao && secao.offsetTop <= posicao) {
          indiceAtual = i;
        }
      });

      links.forEach(function (link, i) {
        link.classList.toggle(CONFIG.classeAtivo, i === indiceAtual);
      });
    });

    window.addEventListener('scroll', atualizar, { passive: true });
    window.addEventListener('resize', atualizar);
    atualizar();
  }


  /* ======================================================================
     2. BOTÃO "VOLTAR AO TOPO"
     ====================================================================== */

  function iniciarBotaoAoTopo() {
    var botao = document.querySelector(CONFIG.botaoAoTopo);
    if (!botao) return;

    var atualizar = limitarPorQuadro(function () {
      botao.classList.toggle(CONFIG.classeVisivel, window.scrollY > CONFIG.alturaDoBotao);
    });

    botao.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', atualizar, { passive: true });
    atualizar();
  }


  /* ======================================================================
     3. FAQ — ABRE O ITEM QUANDO O LINK TRAZ A ÂNCORA DIRETO PARA ELE
     Ex.: alguém compartilha o link ...#pergunta-3
     ====================================================================== */

  function iniciarFaqPorAncora() {
    function abrirAlvo() {
      var hash = window.location.hash;
      if (!hash || hash.length < 2) return;

      var alvo = document.getElementById(hash.slice(1));
      if (!alvo) return;

      // Sobe na árvore até encontrar o <details> que contém o alvo
      var no = alvo;
      while (no && no.tagName !== 'DETAILS') {
        no = no.parentElement;
      }

      if (no) no.open = true;
    }

    abrirAlvo();
    window.addEventListener('hashchange', abrirAlvo);
  }


  /* ======================================================================
     4. ANO AUTOMÁTICO NO RODAPÉ
     ====================================================================== */

  function iniciarAnoDoRodape() {
    document.querySelectorAll('.js-ano').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }


  /* ======================================================================
     INICIALIZAÇÃO
     ====================================================================== */

  function iniciar() {
    iniciarMenuAtivo();
    iniciarBotaoAoTopo();
    iniciarFaqPorAncora();
    iniciarAnoDoRodape();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }

})();
