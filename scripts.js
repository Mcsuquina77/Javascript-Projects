const amount = document.getElementById("amount")

// Manipulando o input Amount para receber apenas números
amount.addEventListener("input" , () => {

   const hasCharactersRegex = /\D/g
    amount.value = amount.value.replace(hasCharactersRegex, "")

    })
