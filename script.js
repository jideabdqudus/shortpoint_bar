document.querySelector('.btn').addEventListener('click', function onClick() {
  let text = document.querySelectorAll('.progress-text')
  text.forEach(t=> t.textContent ="100%")
  document.querySelector('.green').style.width = "98%"
  document.querySelector('.red').style.width = "98%"
  document.querySelector('.white').style.width = "98%"
  document.querySelector('.blue').style.width = "98%"
  document.querySelector('.yellow').style.width = "98%"

  document.querySelector('.reset').style.display ="block"
  document.querySelector('.btn').style.display ="none"
 })


 document.querySelector('.reset').addEventListener('click', function onClick() {
  let text = document.querySelectorAll('.progress-text')
  text.forEach(t=> t.textContent ="50%")
  document.querySelector('.green').style.width = "50%"
  document.querySelector('.red').style.width = "50%"
  document.querySelector('.white').style.width = "50%"
  document.querySelector('.blue').style.width = "50%"
  document.querySelector('.yellow').style.width = "50%"

  document.querySelector('.btn').style.display ="block"
  document.querySelector('.reset').style.display ="none"
 })