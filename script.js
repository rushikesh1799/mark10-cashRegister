const billAmount = document.querySelector('#bill-amount');

const cashGiven = document.querySelector('#cash-given');

const checkButton = document.querySelector('#check-button')

const message = document.querySelector('#error-message')

const noOfNotes = document.querySelectorAll('.no-of-notes')

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1]



function validateBillAmountAndCashAmount() {
    hideMessage()
    var cash=parseInt(cashGiven.value);
    var bill=parseInt(billAmount.value);

    if (bill > 0) {
        if (cash > bill) {
            const AmountToBeReturned = cash - bill;
            calculateChange(AmountToBeReturned)
        } else if (cash === bill) {
            showErrorMessage("Thank you, Have a Great Day Ahead! 😊")
        } else {
            showErrorMessage("Cash given is lesser than the bill amount, Do you want to wash Dishes?")
        }
    } else {
        showErrorMessage("Invalid Bill Amount")
    }
}

checkButton.addEventListener('click', validateBillAmountAndCashAmount
)

function hideMessage() {
    message.style.display = "none";
}

function calculateChange(AmountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            AmountToBeReturned / availableNotes[i]
        );
        AmountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showErrorMessage(msg) {
    message.style.display = "block";
    message.innerText = msg
}

