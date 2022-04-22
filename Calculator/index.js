let first_num = Number(prompt('Введите первое число:'))
let oper = prompt("Укажите операцию(+; - ; *; /;):")
let secoond_num = Number(prompt('Введите второе число:'))
if (oper === "+") {
    alert(first_num + secoond_num)
} else if (oper === "-"){
    alert(first_num - secoond_num)
} else if (oper === "*"){
    alert(first_num * secoond_num)
} else if (oper === "/"){
    alert(first_num / secoond_num)
} 