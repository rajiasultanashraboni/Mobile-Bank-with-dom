document.getElementById('login-button').addEventListener('click',function(event){
    event.preventDefault()
   const addMoney = document.getElementById('input-add-money').value;
//    console.log(addMoney)
   const pinNumber = document.getElementById('input-pin-number').value;
//    console.log(pinNumber)
if(pinNumber==="1234"){
    // console.log('added money')
    const inputAvailableBalance = document.getElementById('available-balance').innerText;
    // console.log(inputAvailableBalance)
    const addMoneyNumber = Number(addMoney);
    const inputAvailableNumber = Number(inputAvailableBalance)
    const newBalance = addMoneyNumber+inputAvailableNumber;
    // console.log(newBalance)
    document.getElementById('available-balance').innerText= newBalance;

}
else{
    alert('invalid number')
}
});



// cash out section is here

document.getElementById('cashout-button').addEventListener('click',function(event){
    // console.log('cashout button clicked')
    event.preventDefault();
    const cashOutMoney = document.getElementById('cashout-amount').value;
    const cashOutMoneyNumber = Number(cashOutMoney);
    const cashOutPin = document.getElementById('cashout-pin-number').value
    // console.log(cashOutMoney,cashOutPin);
    if(cashOutPin==="1234"){
        // console.log('cashout successfull')
        const availableBalance = document.getElementById('available-balance').innerText;
        // console.log(availableBalance)
        const availableBalanceNumber = Number(availableBalance);
        const newBalance = availableBalanceNumber - cashOutMoneyNumber;
        // console.log(newBalance)
        document.getElementById('available-balance').innerText = newBalance;

    }
    else{
        alert('failed.please try again later')
    }
})