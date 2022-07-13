//Creating global variables
const amountInp = document.getElementById("amount")
const depositBtn = document.getElementById("deposit")
const withdrawBtn = document.getElementById("withdraw")
const nameDiv = document.getElementById("name")
const balanceDiv = document.getElementById("balance")

//Creating Bank class
class Bank{
    constructor(name, balance){
        this.balance = balance
        this.name = name
    }

    deposit(value) {
        return this.balance += value
    }

    withdraw(value){
        if(value <= this.balance){
            return this.balance -= value
            
        }else{
            return "no enough money"
        }
    }
}

//Creating objects
const fatih = new Bank("Fatih", 100)
const mehmet = new Bank("Mehmet", 50)


const accounts = [fatih, mehmet]
changeAccount(accounts)

// Creating dropdown menu
// and pulls the data from objects to display dynamically
function changeAccount(accounts){
    document.getElementById("selecter").innerHTML = `
    <select id="accountList" onchange="loadHtml(accounts)">
        <option>Choose an account</option>
        <option value=0>${accounts[0].name}</option>
        <option value=1>${accounts[1].name}</option>
    </select>
    `
}

// pick => Keeps the object array
// selectedValue => Select index of the object array, 
// (it takes the value of the selected option)
function loadHtml(pick){
    const selectedValue = document.getElementById("accountList").value
    if(selectedValue != "Choose an account"){
        nameDiv.innerText = pick[selectedValue].name
        balanceDiv.innerText = pick[selectedValue].balance

        depositBtn.onclick = () => {
            showDiv(pick[selectedValue].deposit(Number(amountInp.value)))
        }

        withdrawBtn.onclick = () => {
            showDiv(pick[selectedValue].withdraw(Number(amountInp.value)))
        }
        
        function showDiv(input){
            balanceDiv.innerText = input
        }
    }
}

//-----//
