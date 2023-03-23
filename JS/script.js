const a = document.querySelector('a')

console.log(a);
a.setAttribute('href', 'https://www.google.co.th')
a.setAttribute('target', '_blank')

// const crru = document.getElementById('crru')
// console.log(crru);

const result = { first_name: "Jed", last_name: "Tao"}
const fullName = `${result.first_name} ${result.last_name}`

const p = document.querySelector('p')
p.innerHTML = fullName
