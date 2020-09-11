//Discount rate

function getValue(inputID){
    var input = documet.getElemetByID(String(inputID))
    return input
}

// console.log(getValue(input-name))


function getDiscountRate(beta){
     var discount_rate = 0
    if(beta < 0.8)
        discount_rate = 0.05
    else if (beta >= 0.8 && beta <= 1)
        discount_rate = 0.06
    else if(beta > 1 && beta <=1.1 )
        discount_rate = 0.065
    else if(beta >1.1 && beta <=1.2 )
        discount_rate = 0.07
    else if(beta >1.2 && beta <=1.3 )
        discount_rate = 0.075
    else if(beta >1.3 && beta <=1.4 )
        discount_rate=0.08
    else if(beta >1.4 && beta <=1.5 )
        discount_rate = 0.085
    else if(beta >= 1.6)
        discount_rate = 0.09
    
    return discount_rate

}




// PV of 10 Yr Cash Flows
function getPV(current_cashflow, growth_rate_1, growth_rate_2, discount_rate){
    var pv = 0
    var temp = current_cashflow
    var sum = 0
    for(var i = 0; i < 10; i++){
        //Before Discount
        if(i < 4)
            temp = temp * growth_rate_1 
        else
            temp = temp * growth_rate_2 

        //After discount
        sum += temp * (1 / (1 + discount_rate) ** (i + 1))

    }
    pv = sum
    return pv
}


// console.log(getPV(27956, 1.222, 1.222, 0.05))


//Intrinsic Valye before cash / debt
function getIntrinsicValue(pv, num_share){
    var intrinsic_value = pv/num_share;

    return intrinsic_value

}

var num_share = 2894.6
var intrinsic_value = getIntrinsicValue(getPV(27956, 1.222, 1.222, 0.05), num_share)
console.log(intrinsic_value)




//Less Debt Per Share
function getLessDebtPerShare(total_debt, num_share){
    var ldps = total_debt / num_share
    return ldps
}

var total_debt = 0
var ldps = getLessDebtPerShare(total_debt, num_share)
console.log(ldps)



//Plus Cash Per Share
function getPlusDebtPerShare(cash_investment, num_share){
    var pdps = cash_investment/ num_share
    return pdps
}

var cash_investment = 42309
var pdps = getPlusDebtPerShare(cash_investment, num_share)
console.log(pdps)

//Final Value Per Share 
function getFinalIntrinsicValue(ldps, pdps, intrinsic_value){
    var final = intrinsic_value + pdps - ldps
    return final
}



console.log(getFinalIntrinsicValue(ldps, pdps, intrinsic_value))

// var update = document.getElementById("input-name")
// update.addEventListener("keyup",function(event){
//     console.log(event)
// })