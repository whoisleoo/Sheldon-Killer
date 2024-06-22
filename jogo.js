var altura = 0
var largura = 0
var lifebar = 1
var tempo = 15
var enemyGeneratorTimer = 1500
var levelEscolhido = window.location.search
var levelEscolhido = levelEscolhido.replace('?', '')
var pontos = 0




if (levelEscolhido === 'normal') {
  enemyGeneratorTimer = 1500
} else if (levelEscolhido === 'dificil') {
  enemyGeneratorTimer = 1000
} else if (levelEscolhido === 'impossivel')
  enemyGeneratorTimer = 750


function atirar() {
  shot = new Audio("audios/shot.mp3");
  shot.volume = 0.2
  shot.play()
}
document.addEventListener('click', atirar)


function ajustarTamanho() {
  altura = window.innerHeight
  largura = window.innerWidth
}

ajustarTamanho()

var timer = setInterval(function () {
  tempo -= 1
  if (tempo < 0) {
    clearInterval(timer)
    clearInterval(enemyGenerator)
    window.location.href = 'win.html'
  } else {
    document.getElementById('timer').innerHTML = tempo
  }

}, 1000)



function randomPosition() {

  //Remoção do enemy anterior logo após a inclusão de um novo
  if (document.getElementById('enemy')) {
    document.getElementById('enemy').remove()


    if (lifebar >= 3) {
      window.location.href = 'gameover.html'
    } else {
      document.getElementById('l' + lifebar).src = 'imagens/coracao_vazio.png'
      lifebar++
    }
  }

  var positionX = Math.floor(Math.random() * largura) - 130
  var positionY = Math.floor(Math.random() * altura) - 130

  positionX = positionX < 0 ? 0 : positionX
  positionY = positionY < 0 ? 0 : positionY

  //criação do elemento enemy

  var enemy = document.createElement('img')
  enemy.src = randomEnemy()
  enemy.className = randomSize() + ' ' + inverseSides()
  enemy.style.left = positionX + 'px'
  enemy.style.top = positionY + 'px'
  enemy.style.position = 'absolute'
  enemy.id = 'enemy'
  enemy.onclick = function () {
    pontos++
    document.getElementById('pontos').innerHTML = pontos
    console.log(pontos)
    this.remove()
  }


  document.body.appendChild(enemy)
}

function randomEnemy() {
  var typeEnemy = Math.floor(Math.random() * 3)

  switch (typeEnemy) {
    case 0:
      return 'imagens/sheldon.png'
    case 1:
      return 'imagens/georgie.png'
    case 2:
      return 'imagens/mary.png'
  }
}

function randomSize() {
  var classe = Math.floor(Math.random() * 3)

  switch (classe) {
    case 0:
      return 'enemy1'
    case 1:
      return 'enemy2'
    case 2:
      return 'enemy3'

  }
}

function inverseSides() {
  var sides = Math.floor(Math.random() * 2)

  switch (sides) {
    case 0:
      return 'sideA'
    case 1:
      return 'sideB'
  }

}




function retry() {
  window.location.href = 'menu.html'
}

function startGame() {
  var nivel = document.getElementById('level').value
  if (nivel === '') {
    alert('Selecione um nível para iniciar o jogo.')
    return false
  }

  window.location.href = "app.html?" + nivel
}

const musica2 = document.querySelector('#ost2')
musica2.volume = 0.05
musica2.play()

function secret() {
  let secret = document.createElement('img')
  secret.src = 'imagens/images.jpg'
  secret.style.position = 'absolute'
  secret.style.right = 828 + 'px'

  document.body.appendChild(secret)

}




