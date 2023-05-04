const message = document.querySelector('.message')
const score = document.querySelector('.score')
const sc1 = document.querySelector('.sc')
let sc = 0
let point
const btn = document.querySelectorAll('button')
const leftMainDiv = document.querySelector('.leftMainDiv')
const rightMainDiv = document.querySelector('.rightMainDiv')

let rpsArr = ['rock', 'paper', 'scissors']
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', (e) => {
    let pl = e.target.innerText
    e.target.setAttribute(
      'style',
      'box-shadow: 0 0 10px 0 rgba(0,0,0,0.45) inset; ',
    )

    console.log('My selected: ' + pl)
    let computerGuess = Math.floor(Math.random() * 3)
    let co = rpsArr[computerGuess]
    console.log('Computer selected: ' + co)

    if (pl === co) {
      if (pl === 'rock' && co === 'rock') {
        rightMainDiv.src = 'image/rock.png'
        leftMainDiv.src = 'image/rock.png'
      }
      if (pl === 'paper' && co === 'paper') {
        rightMainDiv.src = 'image/paper.png'
        leftMainDiv.src = 'image/paper.png'
      }
      if (pl === 'scissors' && co === 'scissors') {
        rightMainDiv.src = 'image/scissors.png'
        leftMainDiv.src = 'image/scissors.png'
      }
      output = '🟰 Draw 🟰'
      point = '0'
    } else {
      if (pl === 'rock') {
        leftMainDiv.src = 'image/rock.png'
        if (co === 'paper') {
          rightMainDiv.src = 'image/paper.png'
          output = '💥 You Lost! 💥'
          point = '-1'
          sc--
        } else {
          rightMainDiv.src = 'image/scissors.png'
          output = '🏆 You Win! 🏆'
          point = '+1'
          sc++
        }
      }
      if (pl === 'paper') {
        leftMainDiv.src = 'image/paper.png'
        if (co === 'scissors') {
          rightMainDiv.src = 'image/scissors.png'
          output = '💥 You Lost! 💥'
          point = '-1'
          sc--
        } else {
          rightMainDiv.src = 'image/rock.png'
          output = '🏆 You Win! 🏆'
          point = '+1'
          sc++
        }
      }
      if (pl === 'scissors') {
        leftMainDiv.src = 'image/scissors.png'
        if (co === 'rock') {
          rightMainDiv.src = 'image/rock.png'
          output = '💥 You Lost! 💥'
          point = '-1'
          sc--
        } else {
          rightMainDiv.src = 'image/paper.png'
          output = '🏆 You Win! 🏆'
          point = '+1'
          sc++
        }
      }
    }
    message.innerText = output
    message.setAttribute('style', 'font-size:30px;font-weight:700')
    score.innerHTML = `Total Score: ${sc}`
    score.setAttribute('style', 'font-size:25px')
    sc1.innerText = point
    sc1.setAttribute(
      'style',
      'width:60px;height:60px;color: #19A7CE;font-size:40px;font-weight:800;border:7px solid #19A7CE;border-radius:50%;padding:10px;display:flex;justify-content:center;align-items:center;box-shadow: -15px -15px 15px rgba(255,255,255,0.2), 15px 15px 15px rgba(0,0,0,0.1), inset -5px -5px 5px rgba(255,255,255,0.2), inset 5px 5px 5px rgba(0,0,0,0.1);',
    )

    btn[i].addEventListener('blur', (e) => {
      e.target.setAttribute(
        'style',
        'box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
      )
    })
  })
}
