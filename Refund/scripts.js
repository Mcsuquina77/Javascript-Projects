// Selectiona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

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
form .onSubmit = (event) => {
    event.preventDefault() // impedir que a página recarregue sempre que o user clica em submit

    const newExpense = {
        id : new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }
    console.log(newExpense)
}

