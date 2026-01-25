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
        description.textContent = `${symbol} 1 = ${price}`
         
    // Aplica a classe que ec«xibe o footer para mostrar o resultado

       footer.classList.add("show-result")

   } catch (error) {
        console.log(error)

        // Remove a do footer ocultando ele.
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente.")
   }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString(PT-BR, { 
        style: "currency", 
        
    })
}