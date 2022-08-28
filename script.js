const billAmount = document.querySelector("#bill-amount");

const cashGiven = document.querySelector("#cash-given");

const checkButton = document.querySelector("#check-button");

const message = document.querySelector("#error-message");

const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

function validateBillAmountAndCashAmount() {
    hideMessage();
    var cash = Number(cashGiven.value);
    var bill = Number(billAmount.value);

    // console.log(cash + 10);
    // console.log(bill);

    if (cash < 0 || bill < 0) {
        showErrorMessage(
            "Bill Amount and Cash given can not be negative, Please fill positive values."
        );
    } else if (cash == 0 || bill == 0) {
        showErrorMessage("Please fill both the values correctly");
    } else if (bill > 0) {
        if (cash > bill) {
            const AmountToBeReturned = cash - bill;
            calculateChange(AmountToBeReturned);
        } else if (cash === bill) {
            showErrorMessage("Thank you, Have a Great Day Ahead! 😊");
        } else {
            showErrorMessage(
                "Cash given is lesser than the bill amount, Do you want to wash Dishes?"
            );
        }
    } else {
        showErrorMessage("Please fill both the values correctly");
    }

    
    // if (bill > 0) {
    //     if (cash > bill) {
    //         const AmountToBeReturned = cash - bill;
    //         calculateChange(AmountToBeReturned)
    //     } else if (cash === bill) {
    //         showErrorMessage("Thank you, Have a Great Day Ahead! 😊")
    //     } else {
    //         showErrorMessage("Cash given is lesser than the bill amount, Do you want to wash Dishes?")
    //     }
    // } else {
    //     showErrorMessage("Please fill both the values correctly")
    // }
}

checkButton.addEventListener("click", validateBillAmountAndCashAmount);

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
    message.innerText = msg;
}
