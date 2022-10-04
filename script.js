let contentBox = document.querySelector('#user-text')
let defaultContent = contentBox.innerHTML

let resetContent = () => {
  contentBox.innerHTML = defaultContent
}

let userHover = (e) => {
  console.log(e.target)
  let summary = e.target.children[0]
  let interview = e.target.children[1]
  contentBox.innerHTML = `${summary.innerHTML}</br></br> ${interview.innerHTML}`
}
let users = document.querySelectorAll('.user-row')
users.forEach((ele) =>
  ele.addEventListener('mouseenter', (e) => {
    userHover(e)
  })
)
users.forEach((ele) =>
  ele.addEventListener('mouseleave', () => {
    resetContent()
  })
)
