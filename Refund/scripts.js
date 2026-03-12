// Selectiona os elementos do formulário

const amount = document.getElementById("amount")

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