const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 132) {
  collisionsMap.push(collisions.slice(i, 132 + i))
}

const boundaries = []
const offset = {
  // Modifica-lo afetará parâmetros, como posição inicial do player (Deslocamento)
  x: -605,
  y: -5600
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      // Código da Colisão
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const characters = []
const villagerImg = new Image()
villagerImg.src = './img/villager/Idle.png'

const oldManImg = new Image()
oldManImg.src = './img/oldMan/Idle.png'

const ferreiroImg = new Image()
ferreiroImg.src = './img/ferreiro/ferreiro.png'

const militarImg = new Image()
militarImg.src = './img/militar/militar.png'

const mercadorImg = new Image()
mercadorImg.src = './img/faro/mercador.png'

const mercador2Img = new Image()
mercador2Img.src = './img/faro/mercador2.png'

const artesaoImg = new Image()
artesaoImg.src = './img/artesao/Idle.png'

const sacerdoteImg = new Image()
sacerdoteImg.src = './img/faro/sacerdote.png'

const timetesImg = new Image()
timetesImg.src = './img/militar/timetes.png'

const historiadorImg = new Image()
historiadorImg.src = './img/faro/historiador.png'

const historiadorApoloImg = new Image
historiadorApoloImg.src = './img/faro/historiadorApolo.png'

const idosoVinha = new Image()
idosoVinha.src = './img/faro/idosoguia2.png'

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1035 == Militar
    if (symbol === 1035) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: militarImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Militar Troiano:</strong><br><br>...',
            '<strong>Militar Troiano:</strong><br><br>Olá Heleno.'
          ]
        })
      )
    }
    // 1026 === villager
    else if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: [
            '<strong>Troiano:</strong><br><br>...',
            '<strong>Troiano:</strong><br><br>Ei, forasteiro ! O que faz aqui, hein ? Espera... por acaso você é Heleno ?',
            '<strong>Troiano:</strong><br><br>Viu aquele cavalo gigante no centro da cidade?<br><br> Uma "oferenda" dos seus, para mostrar nossa vitória esmagadora na guerra de Troia!<br><br>Que ironia, não acha?',
            '<strong>Troiano:</strong><br><br>Veio admirar nossa cidade porque nunca viu algo tão grandioso na sua terra miserável ?',
            '<strong>Troiano:</strong><br><br>Vai conhecer a cidade? Ótimo, só não se perca nos mercados nem ouse subir a Acrópole sem permissão. <br><br>Se passar pela estátua do grandioso Apólo, baixe a cabeça e mostre respeito, ou até os deuses vão rir de você.'
          ]
        })
      )
    }
    // 1031 === oldMan
    else if (symbol === 1031) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: oldManImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: [
            '<strong>Idoso:</strong><br><br>Ah, bem-vindo jovem Heleno. Vejo que veio conhecer a grandiosa Tróia.<br><br> Permita-me guiá-lo com minhas palavras, pois estes caminhos têm história que poucos podem contar. <br><br> Comece pela praça central, onde o mercado está sempre vivo - ali você verá o coração do nosso povo.',
            '<strong>Idoso:</strong><br><br>Depois, siga para a direção Norte da cidade, onde estará a acrópole da cidade. <br><br>Lá, no ponto mais alto da cidade, você verá a residência do rei e o verdadeiro símbolo da nossa força. É um lugar que faz até o mais forte lembrar dos deuses.',
            '<strong>Idoso:</strong><br><br>Tróia é mais do que uma cidade, jovem. É um testemunho de resistência e grandeza. <br><br>Que seus passos por aqui sejam leves e suas memórias, eternas !'
          ]
        })
      )
    }

    // 1047 == Ferreiro
    else if (symbol === 1047) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: ferreiroImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: [
            '<strong>Ferreiro:</strong><br><br> Ah, um jovem Heleno! Seja bem-vindo à minha forja. Aqui o aço ganha forma, e o bronze vira lenda nas mãos de guerreiros e viajantes.',
            '<strong>Ferreiro:</strong><br><br> Veja esta espada de bronze, forjada com liga forte e resistente. O estanho veio das montanhas hititas, e o cobre dos portos do Chipre. Equilibrada, afiada e pronta para o combate — uma lâmina digna de quem busca glória nos campos de batalha.',
            '<strong>Ferreiro:</strong><br><br> Se prefere algo para defesa, tenho escudos laminados com bronze, leves o bastante para manobrar, mas fortes o suficiente para repelir lanças e flechas.',
            '<strong>Ferreiro:</strong><br><br> Não deixe de olhar também nossas pontas de lança e pás de arado. Troia não é só uma cidade de guerreiros, mas de agricultores e mercadores. <br><br>Forjamos tanto para a guerra quanto para a paz.',
            '<strong>Ferreiro:</strong><br><br> Lembre-se: o segredo de uma boa arma não está apenas no metal, mas na alma daquele que a empunha. Escolha bem, rapaz, e que Hefesto guie seu caminho !'
          ]
        })
      )
    }

    // 1070 == Mercador
    else if (symbol === 1070) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: mercadorImg,
          frames: {
            max: 4,
            hold: 127
          },
          scale: 3,
          dialogue: [
            '<strong>Mercador Troiano</strong><br><br> Finalmente, a guerra acabou!<br><br> Os helenos se foram, e aquele magnífico cavalo que deixaram é prova da nossa vitória!',
            '<strong>Mercador Troiano</strong><br><br> Vamos, aproveite!<br><br> Tecidos, joias, especiarias... depois de tanto tempo de conflito, a cidade merece celebrar!',
            '<strong>Mercador Troiano</strong><br><br> Compre o que precisar, pois tempos de paz trazem novas oportunidades!<br><br> Os deuses sorriram para Troia, e a sorte agora está conosco.',
            '<strong>Mercador Troiano</strong><br><br> Vá até a praça central e veja o presente dos helenos com seus próprios olhos. <br><br>Um símbolo de que Troia permanece invencível!'
          ]
        })
      )
    }
    // 1071 == Mercador 02
    else if (symbol === 1071) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: mercador2Img,
          frames: {
            max: 4,
            hold: 126
          },
          scale: 3,
          animate: true,
          dialogue: [
            '<strong>Jovem Mercador Troiano</strong><br><br>Por fim, a guerra terminou!<br><br> Anos de medo e privações ficaram para trás. Os navios gregos partiram, e Troia pode respirar em paz novamente!',
            '<strong>Jovem Mercador Troiano</strong><br><br>Venha, festeje comigo! <br><br>Tecidos vibrantes, especiarias perfumadas, cerâmicas esculpidas com mãos <br>hábeis — tudo para celebrar esta vitória gloriosa!',
            '<strong>Jovem Mercador Troiano</strong><br><br>As ruas se enchem de música, vinho e danças. <br><br>É tempo de vida, não mais de lanças e escudos!',
            '<strong>Jovem Mercador Troiano</strong><br><br>E se quiser ouvir sobre os dias antigos e as batalhas que ficaram para trás, procure o GUARDIÃO DAS MEMÓRIAS.<br><br> Ele repousa na praça ao lado da acrópole, contando histórias de deuses,<br> heróis e os ecos da guerra que agora chegou ao fim.'
          ]
        })
      )
    }
    // 1099 == Artesão
    else if (symbol === 1099) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: artesaoImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: [
            '<strong>Artesão:</strong><br><br> Ah, jovem Heleno! Seja bem-vindo ao mercado de Troia! Vejo que os ventos do Helesponto o trouxeram com segurança. Em que posso servi-lo hoje? Temos os melhores tecidos da região, dignos até de reis!',
            '<strong>Artesão:</strong><br><br> Aqui em Troia VI, somos famosos por nossa lã macia, obtida das ovelhas que pastam nos campos férteis da Trôade. <br><br> Veja este manto vermelho tingido com púrpura de múrice. A cor é rica e vibrante, símbolo de nobreza. Não há tecido que desperte mais inveja entre os chefes!',
            '<strong>Artesão:</strong><br><br> Ah, o linho troiano é famoso em toda a região! Cultivado perto do rio Escamandro, é tecido com habilidade pelas mulheres locais. Leve e fresco, perfeito para os verões escaldantes. Veja esta túnica branca, lisa como a água corrente.<br><br> Também temos peças bordadas com padrões geométricos, uma influência dos nossos contatos com os minoicos de Creta.',
            '<strong>Artesão:</strong><br><br> Escolha com sabedoria, rapaz! Um bom tecido pode ser um companheiro fiel em suas jornadas ou um presente digno dos salões de Micenas. Troia está sempre pronta para atender aqueles que apreciam qualidade e tradição!'
          ]
        })
      )
    }

    // Sacerdote == 1071
    else if (symbol === 1071) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: sacerdoteImg,
          frames: {
            max: 4,
            hold: 240
          },
          animate: true,
          scale: 3,
          dialogue: [
            '<strong>Laocoonte, o Sacerdote:</strong><br><br>....',
            '<strong>Laocoonte, o Sacerdote:</strong><br><br> A ignorância cega até os mais sábios…<br><br> Eles acreditam que a guerra terminou apenas porque os navios partiram? Não veem que esta calma é o prelúdio da tempestade?',
            '<strong>Laocoonte, o Sacerdote:</strong><br><br> Um presente dos gregos…<br><br>Como podem ser tão insensatos? Ulisses não conhece honra, apenas truques e ciladas.<br><br> Se ao menos ouvissem a voz da razão em vez dos sussurros da esperança…',
            '<strong>Laocoonte, o Sacerdote:</strong><br><br> Eu os avisei. Há algo escondido ali. Eu ouvi a madeira gemer sob a lança.<br><br>Mesmo os deuses parecem surdos aos meus apelos. Será este o destino inevitável de Troia?<br><br> Que o orgulho e a ilusão a levem à ruína?',
            '<strong>Laocoonte, o Sacerdote:</strong><br><br> Eles não escutam… e temo que em breve, tudo o que restará serão cinzas e lamentos.',
            '<strong>Laocoonte, o Sacerdote:</strong><br><br> Quidquid id est, timeo Danaos et dona ferentes !<br><br> Tradução (latim): "Seja o que for, temo os gregos, mesmo quando trazem presentes!"'
          ]
        })
      )
    }
    // 1061 == Militar Acrópole
    else if (symbol == 1061) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: militarImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Militar Troiano:</strong><br><br>...',
            '<strong>Militar Troiano:</strong><br><br> A Acrópole é a alma de Troia. Quem quiser profaná-la, terá que passar pela minha espada primeiro — e eu prometo, ela não será clemente.'
          ]
        })
      )
    }
    // 1062 == Militar Acrópole
    else if (symbol == 1062) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: militarImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Militar Troiano:</strong><br><br>...',
            '<strong>Militar Troiano:</strong><br><br> Enquanto eu estiver de pé, nenhum invasor subirá estas escadas. Que os deuses guiem meu braço e a honra de Troia proteja minhas costas.'
          ]
        })
      )
    }
    // 1063 == Militar Acrópole
    else if (symbol == 1063) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: militarImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Militar Troiano:</strong><br><br>...',
            '<strong>Militar Troiano:</strong><br><br> Este solo é sagrado, este posto é minha vida. Se Troia deve cair, será sobre o meu corpo antes de tocar a Acrópole.'
          ]
        })
      )
    }
    // 1064 == Militar Acrópole
    else if (symbol == 1064) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: militarImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Militar Troiano:</strong><br><br>...',
            '<strong>Militar Troiano:</strong><br><br> Aqui, na sombra dos deuses, sou o último bastião. Se o inimigo quiser tomar a Acrópole, que venha; enfrentará o aço e a ira de quem não conhece rendição.'
          ]
        })
      )
    }

    // 1065 == Tímetes
    else if (symbol == 1065) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: timetesImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Tímetes, Guerreiro Troiano:</strong><br><br> Troianos, vejam este presente! Não há mais guerra! Após tantos anos de sofrimento, os gregos finalmente se renderam. <br>Este cavalo imenso é um tributo à nossa grandeza e coragem!',
            '<strong>Tímetes, Guerreiro Troiano:</strong><br><br> Não há dúvida, é claro como o sol! Os gregos reconhecem nossa força. <br>Ulisses e seus guerreiros, astutos como sempre, deixaram para trás este troféu.<br>O que mais poderiam nos dar, senão algo digno de nossa vitória?',
            '<strong>Tímetes, Guerreiro Troiano:</strong><br><br> Este cavalo, grande e imponente, é a chave para nossa paz. <br>Levá-lo para dentro das muralhas é o passo final. Não há mais inimigos, apenas a vitória e o alívio!<br><br> O medo da guerra se foi, agora é hora de celebrarmos!',
            '<strong>Tímetes, Guerreiro Troiano:</strong><br><br> "O que há a temer? Este cavalo é um presente dos deuses! <br>Vamos celebrar a nossa grandeza! <br><br><br><br>(Eneida, Livro II, de Virgílio)"'
          ]
        })
      )
    }

    // 1066 == Idoso vinhas
    else if (symbol == 1066) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: idosoVinha,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Idoso Troiano:</strong><br><br>...',
            '<strong>Idoso Troiano:</strong><br><br> Ah, jovem, você sente isso? O vento que passa por essas folhas carrega histórias mais antigas do que as muralhas de nossa cidade. <br><br>Cada árvore aqui é um guardião silencioso do tempo e dos deuses.',
            '<strong>Idoso Troiano:</strong><br><br> Estas oliveiras... símbolo da paz e da sabedoria.<br><br> Dizem que Atena toca seus ramos para nos proteger. <br><br>Seus frutos nos alimentam, e seu óleo ilumina nossos lares e templos.',
            '<strong>Idoso Troiano:</strong><br><br> Ali, os carvalhos de troncos fortes. <br><br>Essas árvores são sagradas a Zeus, o pai dos deuses. Quando o trovão ecoa, é nesses carvalhos que ele deixa sua marca.<br><br> Ninguém ousa cortar um carvalho sagrado sem invocar a ira divina.',
            '<strong>Idoso Troiano:</strong><br><br> E não se esqueça dos ciprestes, altos e sombrios. Eles nos lembram da eternidade e do destino final de todos os homens. <br><br>Quando alguém parte para o mundo dos mortos, os ciprestes velam pela passagem de sua alma.',
            '<strong>Idoso Troiano:</strong><br><br> Este bosque é um pedaço dos céus na terra, jovem.<br><br> Trate estas árvores com respeito, pois nelas habitam os sussurros dos deuses.<br><br> E em tempos sombrios, quando tudo parece perdido, é sob suas sombras que encontramos esperança.'
          ]
        })
      )
    }
    // 1066 == Idoso vinhas
    else if (symbol == 1066) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: oldManImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Príamo, Rei de Tróia:</strong><br><br>...',
            '<strong>Príamo, Rei de Tróia:</strong><br><br>É com o coração pesado que olho para esta cidade que tanto amei, agora marcada pela dor e pelo sacrifício.<br><br> Não apenas a Troia, mas os corpos dos meus filhos, de meus homens... <br><br>Eles caíram com honra, mas deixaram-me um peso que ninguém pode aliviar.',
            '<strong>Príamo, Rei de Tróia:</strong><br><br>Heitor... meu querido Heitor... <br><br>Era o orgulho da nossa casa, o escudo da nossa gente. E agora, o que resta? <br><br>Seus guerreiros, meus filhos, aqueles que jurei proteger, que morreram por um reino que não pôde mais se manter de pé...',
            '<strong>Príamo, Rei de Tróia:</strong><br><br>Eu os vejo, um por um, como se fossem sombras a me<br><br>assombrar, e meu peito se aperta com a ausência deles.',
            '<strong>Príamo, Rei de Tróia:</strong><br><br>.....',
            '<strong>Príamo, Rei de Tróia:</strong><br><br>Eu pergunto aos deuses, quem nos restará após tantas perdas? <br><br>Que esperança há para aqueles que ainda permanecem?<br><br> O que podemos fazer quando tudo que amamos se despedaça diante de nossos olhos? ',
            '<strong>Príamo, Rei de Tróia:</strong><br><br>Eu olho para o horizonte e vejo a cidade que resistiu, mas, mesmo em nossa vitória, somos incapazes de superar o peso de tantas perdas. <br><br>Se ao menos eu pudesse trazer de volta um dos meus filhos... <br><br>Mas já não há mais tempo para lamentações.<br> A guerra nos tomou, a vida nos arrastou.',
            '<strong>Príamo, Rei de Tróia:</strong><br><br>Se ao menos houvesse mais um dia de paz... <br><br>Mais uma oportunidade para olhar para os rostos daqueles que se foram...',
            '<strong>Príamo, Rei de Tróia:</strong><br><br>Mas o que resta é uma Troia que, mesmo vitoriosa, carrega em seu peito o eco da morte de nossos heróis.<br><br> E a tristeza é nossa companheira, o peso de nossos corações não pode ser lavado.',
            '<strong>Príamo, Rei de Tróia:</strong><br><br>Meus filhos, meus homens...',
            '<strong>Príamo, Rei de Tróia:</strong><br><br>Como continuarei, sem vocês ao meu lado ?'
          ]
        })
      )

    }
    // 1067 == Historiador
    else if (symbol == 1067) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: historiadorImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Guardião das Memórias:</strong><br><br>...',
            '<strong>Guardião das Memórias:</strong><br><br> Ah, jovem, vem se sentar um pouco.<br><br> As pedras frias deste banco guardam tantas histórias quanto estas velhas costas.',
            '<strong>Guardião das Memórias:</strong><br><br> Você quer saber como tudo começou, não é?<br><br> A guerra... a desgraça que caiu sobre nossa amada Troia. <br><br>Pois ouça bem, pois esta história é tão antiga quanto amarga.',
            '<strong>Guardião das Memórias:</strong><br><br> Tudo começou com uma festa divina, no Olimpo. <br><br>O casamento de Peleu e Tétis, os pais do grande Aquiles. Todos os deuses estavam presentes... todos, exceto Éris, a deusa da discórdia. <br><br>Ofendida por não ser convidada, ela lançou entre os convivas uma maçã de ouro com as palavras: ‘Para a mais bela’.',
            '<strong>Guardião das Memórias:</strong><br><br> Então, a disputa começou. Hera, rainha dos deuses; Atena, deusa da sabedoria; e Afrodite, deusa do amor, todas queriam a maçã. <br><br>Elas escolheram um mortal para julgar sua beleza. Um pastor, mas não qualquer pastor... Páris, filho de nosso rei Príamo.',
            '<strong>Guardião das Memórias:</strong><br><br> As deusas não jogam limpo, jovem. Cada uma ofereceu uma tentação ao rapaz. <br><br>Hera prometeu poder e domínio; Atena, sabedoria e glória na guerra. <br><br>Mas Afrodite... Ah, Afrodite ofereceu o que todo jovem coração deseja: o amor da mulher mais bela do mundo.',
            '<strong>Guardião das Memórias:</strong><br><br> E Páris escolheu Afrodite. Com isso, ganhou a paixão de Helena, esposa do rei Menelau de Esparta.<br><br> Louco de desejo, Páris a trouxe para Troia, e com ela, a fúria de toda a Grécia.',
            '<strong>Guardião das Memórias:</strong><br><br> Mil navios cruzaram o mar, com heróis como Agamenon, Ulisses e o furioso Aquiles.<br><br> Vieram exigir vingança e glória. E assim, o que começou com uma maçã dourada terminou em espadas manchadas de sangue.',
            '<strong>Guardião das Memórias:</strong><br><br> Ah, jovem... o destino pode ser cruel, mas as escolhas dos homens são ainda mais.<br><br> Lembre-se desta história, pois foi o desejo de um homem e o orgulho de deuses que nos arrastaram para esta tempestade de morte e destruição.',
            '<strong>Guardião das Memórias:</strong><br><br> Agora vá. <br><br>Que os ventos do tempo carreguem essas palavras para além das muralhas. <br><br>Que não se esqueçam jamais dos erros que nos trouxeram a este destino.'
          ]
        })
      )
    }
    // 1068 == Historiador Apolo
    else if (symbol == 1068) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: historiadorApoloImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Idoso Troiano:</strong><br><br> Ah... a luz dourada de Apolo nunca se apaga, mesmo quando as sombras ameaçam devorar nossas esperanças.<br><br> Venha, jovem, contemple esta estátua. <br><br>Veja como ele nos observa com seus olhos eternos, segurando sua lira e o arco da verdade.',
            '<strong>Idoso Troiano:</strong><br><br> Apolo é mais do que um deus do sol. Ele é o guardião da profecia, da cura e também da punição. <br><br>Foi ele quem guiou nossos antepassados com sabedoria... e com suas flechas certeiras, trouxe pragas sobre aqueles que o desrespeitaram.',
            '<strong>Idoso Troiano:</strong><br><br> Lembre-se, jovem, que Apolo é o deus protetor de nossa Troia. <br><br>Desde os tempos antigos, ele nos abençoa com sua luz e sua orientação. <br><br>Foram suas mãos divinas que ajudaram a erguer estas muralhas sob o comando de Laomedonte.',
            '<strong>Idoso Troiano:</strong><br><br> Há quem diga que Apolo ainda sussurra presságios aos sacerdotes aqui na acrópole.<br><br> Palavras que, às vezes, são difíceis de ouvir ou compreender... <br><br>Talvez seja ele quem nos avisa do perigo que se esconde sob esta falsa vitória.',
            '<strong>Idoso Troiano:</strong><br><br> Hoje, vejo os homens cheios de júbilo, e meu coração teme que estamos cegos à verdade. <br><br>Apolo nos dá a luz, mas também pode cegar aqueles que se recusam a ver. <br><br>Que ele nos proteja, e que sua luz não se transforme em chama vingativa.',
            '<strong>Idoso Troiano:</strong><br><br> Reze, jovem, para que Apolo ainda tenha piedade de Troia. <br><br>Pois quando os deuses se voltam contra nós, nem todas as muralhas do mundo podem nos proteger.'
          ]
        })
      )
    }
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

const image = new Image()
image.src = './img/Pellet Town.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage
  }
})

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: image
})

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: foregroundImage
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

const movables = [background, ...boundaries, foreground, ...characters]
const renderables = [
  background,
  ...boundaries,
  ...characters,
  player,
  foreground
]

function animate() {
  const animationId = window.requestAnimationFrame(animate)
  renderables.forEach((renderable) => {
    renderable.draw()
  })

  let moving = true
  player.animate = false

  if (keys.w.pressed && lastKey === 'w') {
    player.animate = true
    player.image = player.sprites.up

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 3
      })
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true
    player.image = player.sprites.left

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3, // + 3 -> Espécie de prevenção para colisões
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 3
      })
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true
    player.image = player.sprites.down

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 3
      })
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true
    player.image = player.sprites.right

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 3
      })
  }
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
  if (player.isInteracting) {
    switch (e.key) {
      case ' ':
        player.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue } = player.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector('#characterDialogueBox').innerHTML =
            player.interactionAsset.dialogue[dialogueIndex]
          return
        }

        // finish conversation
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        break
    }
    return
  }

  switch (e.key) {
    case ' ':
      if (!player.interactionAsset) return

      // beginning the conversation
      const firstMessage = player.interactionAsset.dialogue[0]
      document.querySelector('#characterDialogueBox').innerHTML = firstMessage
      document.querySelector('#characterDialogueBox').style.display = 'flex'
      player.isInteracting = true
      break
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break

    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break

    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
})

let clicked = false
addEventListener('click', () => {
  if (!clicked) {
    audio.Map.play()
    clicked = true
  }
})

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  player.position = {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  }
}

window.addEventListener('resize', resizeCanvas)
