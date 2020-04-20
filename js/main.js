const tabs = document.querySelectorAll('.tab-name');
const content = document.getElementById('content');

let activeComp = 'Women';

function contentComponent(comp) {
  return `
    <img src="./images/${comp.toLowerCase()}.jpg" alt="" >
    <p>${comp}'s Collection</p>
  `
}

for (const tab of tabs) {

  tab.addEventListener('click', (event) => {
    // load correct content
    let tabText = event.target.innerText
    activeComp = tabText
    content.innerHTML = contentComponent(tabText)
    changeActiveClass()
  })
}

function changeActiveClass() {
  for (const tab of tabs) {
    if (activeComp === tab.innerHTML) {
      tab.classList.add('active')
    } else {
      tab.classList.remove('active')
    }
  }
}