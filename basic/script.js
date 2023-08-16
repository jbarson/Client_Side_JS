console.log('zany to the max');
// const headTag = window.document.children[0].children[2].children[0]
const headTag = document.querySelector('h1')
const listItems = document.querySelectorAll('li')
console.log('h1 tag is', headTag)
console.log('list items are', listItems)

console.log(navigator)

navigator.geolocation.getCurrentPosition(console.log)
