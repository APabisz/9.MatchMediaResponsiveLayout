import "../css/style.scss"

const values = [
  { name: "Ananas", calories: 33, fat: 0, carbs: 11.8 },
  { name: "Apple", calories: 57, fat: 0.7, carbs: 12.1 },
  { name: "Cherry", calories: 67, fat: 0.4, carbs: 14.6 },
  { name: "Orange", calories: 51, fat: 0.2, carbs: 11.3 },
]

const valuesContainer = document.querySelector(".app__values")

const desktopViewport = window.matchMedia("screen and (min-width: 500px)")

const drawValues = (isDesktop) => {
  if (isDesktop) {
    drawDesktopValues()
  } else {
    drawMobileValues()
  }
}

const drawMobileValues = () => {
  valuesContainer.innerHTML = ""

  const list = document.createElement("ul")

  values.forEach((value) => {
    const element = document.createElement("li")
    const name = document.createElement("div")
    name.innerHTML = `<strong>Name: </strong>${value.name}`
    const calories = document.createElement("div")
    calories.innerHTML = `<strong>Calories: </strong>${value.calories}kcal`
    const fat = document.createElement("div")
    fat.innerHTML = `<strong>Fat: </strong>${value.fat}g`
    const carbs = document.createElement("div")
    carbs.innerHTML = `<strong>Carbohydrates: </strong>${value.carbs}g`

    element.appendChild(name)
    element.appendChild(calories)
    element.appendChild(fat)
    element.appendChild(carbs)
    list.appendChild(element)
  })

  valuesContainer.appendChild(list)
}

const drawDesktopValues = () => {
  valuesContainer.innerHTML = ""

  const table = document.createElement("table")
  const thead = document.createElement("thead")

  thead.innerHTML =
    "<tr><th>Name</th><th>Calories [kcal]</th><th>Fat [g]</th><th>Carbohydrates [g]</th></tr>"

  const tbody = document.createElement("tbody")

  values.forEach((value) => {
    const row = document.createElement("tr")
    row.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td>`
    tbody.appendChild(row)
  })

  table.appendChild(thead)
  table.appendChild(tbody)
  valuesContainer.appendChild(table)
}

drawValues(desktopViewport.matches)

desktopViewport.addEventListener("change", (isDesktop) => {
  drawValues(isDesktop.matches)
})
