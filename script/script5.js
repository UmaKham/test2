const people = 7
const capacity = 10
let name = prompt('Как Вас зовут?').toLowerCase().trim()
  if (name[0] == "a") {
    let age = +prompt("Введите свой возраст")
    if (age >= 18 && age <= 40) {
      let cash = +prompt("Вы знаете какая цена входа в это заведение?") 
        if (cash >= 100) {
          numOfPeople = +prompt('Сколько Вас человек?')
          if (numOfPeople >= (capacity - people) && numOfPeople <= (capacity - people)) {
            alert('Добро пожаловать, хорошего отдыха!')
          } else {
            alert("Извините, нет мест")
          }
        } else {
          alert("Я думаю сегодня Вам лучше отдохнуть дома!")
      }
    } else {
      alert("Простите, но Вы должны уйти!")
    }
} else {
  alert("Ваше имя не соответствует!")
}