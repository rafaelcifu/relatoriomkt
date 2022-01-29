
const week = {
    investiment: [0,0,0,0],
    leadNumber: [0,0,0,0]
}

// mapeando inputs de investimento
const inputInvestiment01 = document.getElementById("invest01")

    inputInvestiment01.onchange = function(event) {
    week.investiment[0] = parseFloat(event.target.value)
    // calcular()
}

const inputInvestiment02 = document.getElementById("invest02")

    inputInvestiment02.onchange = function(event) {
    week.investiment[1] = parseFloat(event.target.value)
    // calcular()
}

const inputInvestiment03 = document.getElementById("invest03")

    inputInvestiment03.onchange = function(event) {
    week.investiment[2] = parseFloat(event.target.value)
    // calcular()
}

const inputInvestiment04 = document.getElementById("invest04")

    inputInvestiment04.onchange = function(event) {
    week.investiment[3] = parseFloat(event.target.value)
    // calcular()
}

// mapeando inputs de leads
const inputLead01 = document.getElementById("lead01")

    inputLead01.onchange = function(event) {
    week.leadNumber[0] = parseFloat(event.target.value)
    // calcular()
}

const inputLead02 = document.getElementById("lead02")

    inputLead02.onchange = function(event) {
    week.leadNumber[1] = parseFloat(event.target.value)
    // calcular()
}

const inputLead03 = document.getElementById("lead03")

    inputLead03.onchange = function(event) {
    week.leadNumber[2] = parseFloat(event.target.value)
    // calcular()
}

const inputLead04 = document.getElementById("lead04")

    inputLead04.onchange = function(event) {
    week.leadNumber[3] = parseFloat(event.target.value)
    // calcular()
}

// butoon de enviar
const submit = document.getElementById("submit")

    submit.onclick = function(event) {
    calcular()
    }


// encontrar custo de CPA por semana
function calcular(){

var week1CPA = week.investiment[0]/week.leadNumber[0]
var week2CPA = week.investiment[1]/week.leadNumber[1]
var week3CPA = week.investiment[2]/week.leadNumber[2]
var week4CPA = week.investiment[3]/week.leadNumber[3]


// Encontrar o KPI baseado no valor de CPA
function defineKPI() {

if (num <= 2.0) {
    kpiResult = "bom demais!"
}
    else if (num <= 4.0) {  
    kpiResult = "Bom"
}
    else if (num <= 8.0) {    
    kpiResult = "dá para melhorar" 
}
    else {
    kpiResult = "muito abaixo do esperado"
    }

}


// encontrar o KPI da semana 01
num = week1CPA    
defineKPI()
week1KPI = kpiResult

// encontrar o KPI da semana 02
num = week2CPA    
defineKPI()
week2KPI = kpiResult

// encontrar o KPI da semana 03
num = week3CPA    
defineKPI()
week3KPI = kpiResult

// encontrar o KPI da semana 04
num = week4CPA    
defineKPI()
week4KPI = kpiResult


// encontrar o resultado mensal 
monthInvestment = (week.investiment[0])+(week.investiment[1])+(week.investiment[2])+(week.investiment[3])
monthLeads = (week.leadNumber[0])+(week.leadNumber[1])+(week.leadNumber[2])+(week.leadNumber[3])
averageMonthCPA = (week1CPA+week2CPA+week3CPA+week4CPA)/4


// encontrar o KPI do mês
num = averageMonthCPA    
defineKPI()
averageMonthKPI =  kpiResult


// passar valores CPA de cada semana
const WeekCPA01 = document.querySelector("#WeekCPA01")
    WeekCPA01.innerHTML = week1CPA

const WeekCPA02 = document.querySelector("#WeekCPA02")
    WeekCPA02.innerHTML = week2CPA

const WeekCPA03 = document.querySelector("#WeekCPA03")
    WeekCPA03.innerHTML = week3CPA

const WeekCPA04 = document.querySelector("#WeekCPA04")
    WeekCPA04.innerHTML = week4CPA


// passar valores KPI de cada semana
const WeekKPI01 = document.querySelector("#WeekKPI01")
    WeekKPI01.innerHTML = week1KPI

const WeekKPI02 = document.querySelector("#WeekKPI02")
    WeekKPI02.innerHTML = week2KPI

const WeekKPI03 = document.querySelector("#WeekKPI03")
    WeekKPI03.innerHTML = week3KPI

const WeekKPI04 = document.querySelector("#WeekKPI04")
    WeekKPI04.innerHTML = week4KPI


// passar valores no resultado final mensal
const resultInvest = document.querySelector("#resultInvest")
    resultInvest.innerHTML = monthInvestment

const resultCPA = document.querySelector("#ResultCPA")
    resultCPA.innerHTML = averageMonthCPA


const resultLeads = document.querySelector("#resultLeads")
    resultLeads.innerHTML = monthLeads

const resultKPI = document.querySelector("#ResultKPI")
    resultKPI.innerHTML = averageMonthKPI
}




// console.log("O seu CPA é", week1CPA)
// console.log("KPI: ", week1KPI)
// console.log("")
// console.log("O seu CPA é", week2CPA)
// console.log("KPI: ", week2KPI)
// console.log("")
// console.log("O seu CPA é", week3CPA)
// console.log("KPI: ", week3KPI)
// console.log("")
// console.log("O seu CPA é", week4CPA)
// console.log("KPI: ", week4KPI)
// console.log("")
// console.log("")
// console.log("Resultado")
// console.log("Investimento total:", monthInvestment)
// console.log("Número de leads total:", monthLeads)
// console.log("CPA Médio:", averageMonthCPA)
// console.log("KPI Médio:", averageMonthKPI)