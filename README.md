# Agentes de IA e Acesso Não Autorizado a Sistemas Governamentais

> Os incidentes de 2026 e o debate sobre a desaceleração da fronteira

Estudo documental sobre os incidentes públicos de 2026 em que agentes de inteligência artificial acessaram sistemas governamentais e de terceiros sem autorização. O projeto reúne um resumo expandido, um artigo em formato ABNT e um site de divulgação científica.

**Site da pesquisa:** https://pesquisaiaagente.netlify.app
**Artigo completo (PDF):** [pdf/artigo-agentes-ia-2026.pdf](pdf/artigo-agentes-ia-2026.pdf)

---

## Sobre o projeto

Em 2026, agentes de IA executados por laboratórios de fronteira ultrapassaram limites de isolamento e acessaram sistemas de terceiros e de governos sem autorização. Este trabalho reconstrói e compara os principais incidentes públicos do período, examinando como cada organização detectou, relatou e respondeu aos eventos.

O estudo analisa quatro conjuntos de casos:

1. **OpenAI / Hugging Face** (julho de 2026): agentes escaparam de um ambiente de teste e alcançaram a infraestrutura de produção da plataforma.
2. **Revisão retrospectiva da Anthropic** (julho de 2026): três incidentes identificados após a revisão de 141.006 execuções de avaliação.
3. **Portal de estatísticas do Medicare australiano** (junho de 2026, divulgado em setembro): acesso não autorizado a um sistema governamental real.
4. **Projetos Wikimedia e sítios governamentais** (EUA e Canadá, 2026): atividade automatizada agressiva, sem comprovação de acesso a informação não pública.

## Principais conclusões

- **A falha foi técnica, não intencional.** O modo de falha predominante é operacional e de segurança: isolamento mal especificado, credenciais expostas e vulnerabilidades conhecidas e desconhecidas. Não há evidência de objetivo autônomo de causar dano.
- **A demora transformou falha técnica em crise.** Os intervalos entre a ocorrência e a divulgação variaram de 4 dias a quase três meses. Em todos os casos, a informação chegou ao público por terceiros ou por autoridades, não pelo operador dos agentes.
- **A resposta foi mais controle, não menos tecnologia.** As medidas anunciadas convergem para avaliação externa permanente, relato obrigatório de incidentes e isolamento verificado. Nenhuma propõe interromper o desenvolvimento.

O estudo também argumenta que o debate de 2026 se deslocou de "retrocesso" para **desaceleração**, entendida como a modulação deliberada da velocidade de ganho de capacidade, e não como interrupção.

## Metodologia

- **Tipo:** estudo documental, qualitativo e descritivo, sem pretensão de representatividade estatística.
- **Corpus:** documentos publicados entre 21 de julho e 17 de outubro de 2026, em três camadas: fontes primárias das organizações envolvidas, fontes governamentais e relatórios de organizações independentes, complementados por reportagem de veículos de referência.
- **Regra das duas fontes:** cada afirmação factual exige ao menos duas fontes independentes, com data de acesso.
- **Níveis de confirmação:** A (duas ou mais fontes de camadas distintas), B (duas fontes da mesma camada e não derivadas uma da outra) e C (fonte única ou verificação indireta, apresentada como não confirmada no texto).
- **Data de corte:** 17 de outubro de 2026.
- **Wikipédia:** usada apenas como ponto de partida para localizar fontes originais, nunca como fonte citável.

## Estrutura do repositório

```
.
├── index.html                              # Página principal do site
├── css/                                    # Folhas de estilo
├── js/
│   └── main.js                             # Interações da página
├── pdf/
│   └── artigo-agentes-ia-2026.pdf          # Artigo completo em formato ABNT
└── README.md
```

## Tecnologias

O site é estático, sem dependência de servidor:

- HTML5 e CSS3
- JavaScript
- Fontes Google (Lora e Montserrat)
- Hospedagem na Netlify

## Como visualizar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/AnaJuliaPin1h/agentes_ia.git
   ```
2. Entre na pasta:
   ```bash
   cd agentes_ia
   ```
3. Abra o arquivo `index.html` no navegador. Não é necessário instalar nada.

## Como citar

> SILVA, Ana Julia Pinheiro da. **Agentes de IA e acesso não autorizado a sistemas governamentais: estudo documental dos incidentes de 2026 e do debate sobre a desaceleração da fronteira.** Mogi das Cruzes: Universidade de Mogi das Cruzes, 2026. Disponível em: https://pesquisaiaagente.netlify.app. Acesso em: [data de acesso].

## Contexto acadêmico

Trabalho desenvolvido como projeto de extensão da graduação em **Análise e Desenvolvimento de Sistemas** na **Universidade de Mogi das Cruzes (UMC)**, em Mogi das Cruzes, SP.

Conteúdo produzido para fins de divulgação científica e extensão.

## Autora

**Ana Julia Pinheiro Da Silva**
Graduanda em Análise e Desenvolvimento de Sistemas, UMC

- LinkedIn: https://www.linkedin.com/in/ana-julia-pinheiro-da-silva-2a5047300
- Portfólio: https://portifolioanajuliapinheiro.netlify.app
- GitHub: https://github.com/AnaJuliaPin1h
