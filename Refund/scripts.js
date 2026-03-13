// Selectiona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// Seleciono os elementos da lista
const expenseList = document.querySelector("ul")

// Capturo o evento de input para formatar o valor
amount.oninput = () => {

    let value = amount.value.replace(/\D/g, "") // Recebo o valor do input e tiro as letras
    
    //Transforma o valor em centavos (150/100 = 1.50)
    value = Number(value) / 100

        // Actualizo o valor do input 
    amount.value = formatCurrencyBRL(value) 

}
function formatCurrencyBRL(value) {

    // Aqui formato o valor no padrão BRL (Real Brasileiro)
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL", 
    })
    
    // Retorno o valor já formatado
    return value 
}

// Capturo o evento de submit do formulário para obter os valores
form.onsubmit = (event) => {
    event.preventDefault() // impedir que a página recarregue sempre que o user clica em submit

    const newExpense = {
        id : new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    // Chamo a função que vai adicionar o item na lista
    expenseAdd(newExpense)
}

function expenseAdd(newExpense){
try {
        // Crio o elemento de li para adicionar o Item (li) na lista (ul)
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        // Cria o icone da categoria 
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name.svg)

        // Adiciona as informações no Item
        expenseItem.append(expenseIcon)

        // Adiciono o Item na lista
        expenseList.append(expenseItem)



} catch (error) {
    alert("Não foi possível actualizar a lista de despesas")
    console.log(error)
}
}

