function input(inputId){
    let getField=document.getElementById(inputId)

    let getValue= parseFloat(getField.value)
  
    return getValue 
}

function balanceCalculation(id){
    let Income=input('income')
    let Food=input('food')
    let Rent=input('rent')
    let Clothes=input('clothes')
    let totalExpences= Food+Rent+Clothes
    let Balance=Income-totalExpences
    return Balance
    
}

// expense calculation
document.getElementById('calculate-button').addEventListener('click',function(){
    let Income=input('income')
    let Food=input('food')
    let Rent=input('rent')
    let Clothes=input('clothes')
    if(Income<0 || Food<0 || Rent<0 || Clothes<0){
        document.getElementById('error').innerText='Please enter positive number'
        document.getElementById('total-expense').innerText=0
        document.getElementById('balance').innerText= 0
    }
    else if(isNaN(Food)||isNaN(Income)||isNaN(Rent)||isNaN(Clothes)){
        document.getElementById('error').innerText='Enter a valid number'
        document.getElementById('total-expense').innerText=0
        document.getElementById('balance').innerText= 0
    }
    else{
        document.getElementById('error').innerText=''
        let totalExpences= Food+Rent+Clothes
        document.getElementById('total-expense').innerText=totalExpences
        let Balance=balanceCalculation('calculate-button')
        document.getElementById('balance').innerText= Balance
    }
      
       
})


// saving calculaton
document.getElementById('saving-button').addEventListener('click',function(){
    const Save= input('save')
    const Income=input('income')
    let savingAmount= Income*(Save/100)
  
    let Balance=balanceCalculation('saving-button')
    
    if(Save<0){
        document.getElementById('error').innerText='Please enter positive number'
        document.getElementById('saving-amount').innerText=00
        document.getElementById('remaining-balance').innerText=00
    }else if(isNaN(Save)){
        document.getElementById('error').innerText='Enter a valid number'
        document.getElementById('saving-amount').innerText=00
        document.getElementById('remaining-balance').innerText=00
    }
    else if(savingAmount>Balance){
        document.getElementById('error').innerText='You dont have enough balance'
        document.getElementById('saving-amount').innerText=00
        document.getElementById('remaining-balance').innerText=00
    }else{
        document.getElementById('saving-amount').innerText=savingAmount
        let remainingBalance=Balance-savingAmount
        document.getElementById('remaining-balance').innerText=remainingBalance
        document.getElementById('error').innerText=''
    }
    
})
