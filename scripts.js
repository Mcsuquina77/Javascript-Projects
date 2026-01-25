// cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


// obendo elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input Amount para receber apenas números
amount.addEventListener("input" , () => {

   const hasCharactersRegex = /\D/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
    })

// Captando o evento de submit do formulário
form.onsubmit = (event) => {
   event.preventDefault()
   switch (currency.value) {
       case "USD":
           convertCurrency(amount.value, USD, "US$")
             break
       case "EUR":
           convertCurrency(amount.value, EUR, "€")
           break
           case "GBP":
           convertCurrency(amount.value, GBP, "£")
           break
         }
}

// função para converter a moeda
function convertCurrency(amount, price, symbol) {
   try {
    // exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // calcula o total
        let total = amount * price 

        // verifica se o resultado não é um número
        if(isNaN(total)){
            return alert("Por favor, digite o valor correctamente para converter.")
        }
        // formatar o valor total.
        total = formatCurrencyBRL(total).replace("R$","")

    // Exibe o resultado total
        result.textContent = `${total} Reais`

            
    // Aplica a classe que exibe o footer para mostrar o resultado

       footer.classList.add("show-result")

   } catch (error) {
        console.log(error)

        // Remove a do footer ocultando ele.
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente.")
   }
}

    // formata a function em real brasileiro
function formatCurrencyBRL(value) {

    // Converte para número para utilizar o toLocalrString para formatar no padrão BRL(R$)
    return Number(value).toLocaleString("pt-BR", { 
        style: "currency", 
        currency: "BRL",
    })
}