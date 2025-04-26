const heading = document.createElement("h2")
heading.className = "Heading"
heading.id = Math.round(Math.random() * 10 + 1)
heading.innerHTML = "Hello this is again "
heading.style.backgroundColor = "skyblue"
heading.style.padding = "12px"
const addtext = document.createTextNode("this is some extra information.")
heading.appendChild(addtext)
document.body.appendChild(heading)



const p = document.createElement('p')
p.className = "ranjan"
p.id = Math.round(Math.random() * 10 +1)
p.innerHTML = "Hello ranjan "
p.style.backgroundColor = "green"
p.style.padding = "12px"
p.style.fontWeight = "bold"
const addtxt = document.createTextNode("Are you still here")
p.appendChild(addtxt)

document.body.appendChild(p)