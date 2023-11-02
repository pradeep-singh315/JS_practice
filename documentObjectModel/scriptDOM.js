const para = document.getElementById("para")

para.style.backgroundColor = "green"
para.style.padding = "20px"
para.style.borderRadius = "25px"
para.style.color = "#fff"

const allButtons = document.getElementsByClassName("btn")

//allButtons[0].style.backgroundColor = "salmon"

const arrNew = Array.from(allButtons)
arrNew.forEach((element) => {
    element.style.borderRadius = "40px"
    element.style.backgroundColor = "orange"
    element.style.color = "white"
    element.style.padding = "19px"
})