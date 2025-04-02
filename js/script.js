function formatNumber(num) {
    return num.toLocaleString();
}
function updateVariableTotal(){
    if(flexibleLaborInputAmt > 0 || flexibleSuppliesInputAmt > 0){
        flexibleVariableTotalAmt = flexibleLaborInputAmt + flexibleSuppliesInputAmt;
        document.querySelectorAll(".flexible_variable_total_amt").forEach(element => {
            element.innerText = "$" + formatNumber(flexibleVariableTotalAmt);
        });

        document.getElementById("flexible_variable_per_visit_cal").innerText = "( $" + formatNumber(flexibleVariableTotalAmt) + " / $" + formatNumber(flexibleVisit) + " )";
        document.getElementById("flexible_variable_per_visit").innerText = "$" + formatNumber(flexibleVariableTotalAmt / flexibleVisit);
    } else {
        flexibleVariableTotalAmt = 0;
        document.querySelectorAll(".flexible_variable_total_amt").forEach(element => {
            element.innerText = "";
        });

        document.getElementById("flexible_variable_per_visit_cal").innerText = ""
        document.getElementById("flexible_variable_per_visit").innerText = "";
    }

    if(actualLaborInputAmt > 0 || actualSuppliesInputAmt > 0){
        actualVariableTotalAmt = actualLaborInputAmt + actualSuppliesInputAmt;
        document.querySelectorAll(".actual_variable_total_amt").forEach(element => {
            element.innerText = "$" + formatNumber(actualVariableTotalAmt);
        });

        document.getElementById("actual_variable_per_visit_cal").innerText = "( $" + formatNumber(actualVariableTotalAmt) + " / $" + formatNumber(actualVisit) + " )";
        document.getElementById("actual_variable_per_visit").innerText = "$" + formatNumber(actualVariableTotalAmt / actualVisit);
    } else {
        actualVariableTotalAmt = 0;
        document.querySelectorAll(".actual_variable_total_amt").forEach(element => {
            element.innerText = "";
        });

        document.getElementById("actual_variable_per_visit_cal").innerText = ""
        document.getElementById("actual_variable_per_visit").innerText = "";
    }
}
function updateTotalProfit(){
    if(flexibleReimbursementTotalAmt > 0 || flexibleVariableTotalAmt > 0){
        document.getElementById("flexible_total_profit_amt_cal").innerText =  '$' + formatNumber(flexibleReimbursementTotalAmt) +  " - ( $" + formatNumber(flexibleVariableTotalAmt) + " + $" + formatNumber(flexibleFixedCosts) + " )";
        flexibleProfit = flexibleReimbursementTotalAmt - (flexibleVariableTotalAmt + flexibleFixedCosts)
        document.getElementById("flexible_total_profit_amt").innerText = "$" + formatNumber(flexibleProfit);
    }
    if(actualReimbursementTotalAmt > 0 || actualVariableTotalAmt > 0){
        document.getElementById("actual_total_profit_amt_cal").innerText =  '$' + formatNumber(actualReimbursementTotalAmt) +  " - ( $" + formatNumber(actualVariableTotalAmt) + " + $" + formatNumber(actualFixedCosts) + " )";
        actualProfit = actualReimbursementTotalAmt - (actualVariableTotalAmt + actualFixedCosts)
        document.getElementById("actual_total_profit_amt").innerText = "$" + formatNumber(actualProfit);
    }
    updateVariances()
}
function updateVariances(){
    if(actualProfit > 0){
        document.getElementById("profit_variance_cal").innerText =  "( $" + formatNumber(actualProfit) +  " - $" + formatNumber(staticProfit) +" )";
        // actualProfit = actualReimbursementTotalAmt - (actualVariableTotalAmt + actualFixedCosts)
        document.getElementById("profit_variance_amt").innerText = "$" + formatNumber(actualProfit - staticProfit);
    }
    if(actualReimbursementTotalAmt > 0){
        document.getElementById("revenue_variance_cal").innerText =  "( $" + formatNumber(actualReimbursementTotalAmt) +  " - $" + formatNumber(staticReimbursementTotalAmt) +" )";
        // actualProfit = actualReimbursementTotalAmt - (actualVariableTotalAmt + actualFixedCosts)
        document.getElementById("revenue_variance_amt").innerText = "$" + formatNumber(actualReimbursementTotalAmt - staticReimbursementTotalAmt);
    }
    if(staticVariableTotalAmt > 0){
        document.getElementById("cost_variance_cal").innerText =  "( $" + formatNumber((staticVariableTotalAmt + staticFixedCosts)) +  " - $" + formatNumber(actualVariableTotalAmt + actualFixedCosts) +" )";
        // actualProfit = actualReimbursementTotalAmt - (actualVariableTotalAmt + actualFixedCosts)
        document.getElementById("cost_variance_amt").innerText = "$" + formatNumber((staticVariableTotalAmt + staticFixedCosts) - (actualVariableTotalAmt + actualFixedCosts));
    }
    if(flexibleReimbursementTotalAmt > 0){
        document.getElementById("volume_variance_cal").innerText =  "( $" + formatNumber(flexibleReimbursementTotalAmt) +  " - $" + formatNumber(staticReimbursementTotalAmt) +" )";
        document.getElementById("volume_variance_amt").innerText = "$" + formatNumber(flexibleReimbursementTotalAmt - staticReimbursementTotalAmt);
    }
    if(actualReimbursementTotalAmt > 0){
        document.getElementById("price_variance_cal").innerText =  "( $" + formatNumber(actualReimbursementTotalAmt) +  " - $" + formatNumber(flexibleReimbursementTotalAmt) +" )";
        document.getElementById("price_variance_amt").innerText = "$" + formatNumber(actualReimbursementTotalAmt - flexibleReimbursementTotalAmt);
    }
    if(staticVariableTotalAmt > 0){
        document.getElementById("volume2_variance_cal").innerText =  "( $" + formatNumber((staticVariableTotalAmt + staticFixedCosts)) +  " - $" + formatNumber(flexibleVariableTotalAmt + flexibleFixedCosts) +" )";
        document.getElementById("volume2_variance_amt").innerText = "$" + formatNumber((staticVariableTotalAmt + staticFixedCosts) - (flexibleVariableTotalAmt + flexibleFixedCosts));
    }
    if(flexibleVariableTotalAmt > 0){
        document.getElementById("management_variance_cal").innerText =  "( $" + formatNumber((flexibleVariableTotalAmt + flexibleFixedCosts)) +  " - $" + formatNumber((actualVariableTotalAmt + actualFixedCosts)) +" )";
        document.getElementById("management_variance_amt").innerText = "$" + formatNumber((flexibleVariableTotalAmt + flexibleFixedCosts) - (actualVariableTotalAmt + actualFixedCosts));
    }
    if(flexibleLaborInputAmt > 0){
        document.getElementById("labor_variance_cal").innerText =  "( $" + formatNumber(flexibleLaborInputAmt) +  " - $" + formatNumber(actualLaborInputAmt) +" )";
        document.getElementById("labor_variance_amt").innerText = "$" + formatNumber(flexibleLaborInputAmt - actualLaborInputAmt);
    }
    if(flexibleSuppliesInputAmt > 0){
        document.getElementById("supplies_variance_cal").innerText =  "( $" + formatNumber(flexibleSuppliesInputAmt) +  " - $" + formatNumber(actualSuppliesInputAmt) +" )";
        document.getElementById("supplies_variance_amt").innerText = "$" + formatNumber(flexibleSuppliesInputAmt - actualSuppliesInputAmt);
    }
    if(flexibleFixedCosts > 0){
        document.getElementById("fixed_variance_cal").innerText =  "( $" + formatNumber(flexibleFixedCosts) +  " - $" + formatNumber(actualFixedCosts) +" )";
        document.getElementById("fixed_variance_amt").innerText = "$" + formatNumber(flexibleFixedCosts - actualFixedCosts);
    }
    document.getElementById("labor_variance_rate_cal").innerText =  "( $" + formatNumber(staticLaborPrices) + ' - $' + formatNumber(actualLaborPrices) +  ") * " + formatNumber(actualFixedCosts);
    document.getElementById("labor_variance_rate_amt").innerText = "$" + formatNumber((staticLaborPrices - actualLaborPrices) * actualFixedCosts);
    
    document.getElementById("labor_efficiency_rate_cal").innerText =  "( $" + formatNumber(flexibleLaborInputs) + " - $" + formatNumber(actualLaborInputs) +  ") * $" + formatNumber(staticLaborPrices);
    document.getElementById("labor_efficiency_rate_amt").innerText = "$" + formatNumber((flexibleLaborInputs - actualLaborInputs) * staticLaborPrices);
    
    document.getElementById("supplies_price_variance_cal").innerText =  "( $" + formatNumber(staticSuppliesPrices) + " - $" + formatNumber(actualSuppliesPrices) +  ") * $" + formatNumber(actualSuppliesInputs);
    document.getElementById("supplies_price_variance_amt").innerText = "$" + formatNumber((staticSuppliesPrices - actualSuppliesPrices) * actualSuppliesInputs);
    
    document.getElementById("supplies_usage_variance_cal").innerText =  "( $" + formatNumber(flexibleSuppliesInputs) + " - $" + formatNumber(actualSuppliesInputs) +  ") * $" + formatNumber(staticSuppliesPrices);
    document.getElementById("supplies_usage_variance_amt").innerText = "$" + formatNumber((flexibleSuppliesInputs - actualSuppliesInputs) * staticSuppliesPrices);
    
}
function updateValues(value, type) {
    val = parseFloat(value) || 0; // Convert input to number or default to 0
    if(type == 'volumeBlueCross'){
        actualBlueCross = val
        if(actualBlueCross > 0) {
            // Static Budget Volume for BlueCross 
            document.getElementById("actual_bluecross").innerText = actualBlueCross + "%";
            document.getElementById("actual_bluecross_cal").innerText = "( " + actualBlueCross + " % " + " of "+ formatNumber(actualVisit) + " )";
            actualBlueCrossAmt = (actualBlueCross * actualVisit) / 100
            document.getElementById("actual_bluecross_amt").innerText = "$" + formatNumber(actualBlueCrossAmt);
            actualTotalAmt = actualBlueCrossAmt + actualHighmarkAmt
            document.getElementById("actual_total_amt").innerText = "$" + formatNumber(actualTotalAmt);
             
        } else {
            document.getElementById("actual_bluecross").innerText = ""
            document.getElementById("actual_bluecross_cal").innerText = "";
            actualBlueCrossAmt = 0
            document.getElementById("actual_bluecross_amt").innerText = "";
            actualTotalAmt = actualBlueCrossAmt + actualHighmarkAmt
            document.getElementById("actual_total_amt").innerText = "";
        }
    }
    if(type == 'volumeHighmark'){
        actualHighmark = val
        if(actualHighmark > 0) {
            // Static Budget Volume for BlueCross 
            document.getElementById("actual_highmark").innerText = actualHighmark + "%";
            document.getElementById("actual_highmark_cal").innerText = "( " + actualHighmark + " % " + " of "+ formatNumber(actualVisit) + " )";
            actualHighmarkAmt = (actualHighmark * actualVisit) / 100
            document.getElementById("actual_highmark_amt").innerText = "$" + formatNumber(actualHighmarkAmt);
            actualTotalAmt = actualBlueCrossAmt + actualHighmarkAmt
            document.getElementById("actual_total_amt").innerText = "$" + formatNumber(actualTotalAmt);
            
        } else {
            document.getElementById("actual_highmark").innerText = ""
            document.getElementById("actual_highmark_cal").innerText = "";
            actualHighmarkAmt = 0
            document.getElementById("actual_highmark_amt").innerText = "";
        }
    }
    if(type == "revenueBlueCross"){
        actualReimbursementBlueCross = val
        if(actualReimbursementBlueCross > 0) {
            // Static Budget Volume for BlueCross 
            document.getElementById("actual_reimbursement_bluecross").innerText = '$' + actualReimbursementBlueCross;
            document.getElementById("actual_reimbursement_bluecross_cal").innerText = "( " + actualReimbursementBlueCross + " * " + formatNumber(actualBlueCrossAmt) + " )";
            actualReimbursementBlueCrossAmt = (actualReimbursementBlueCross * actualBlueCrossAmt)
            document.getElementById("actual_reimbursement_bluecross_amt").innerText = "$" + formatNumber(actualReimbursementBlueCrossAmt);
            actualReimbursementTotalAmt = actualReimbursementBlueCrossAmt + actualReimbursementHighmarkAmt
            document.querySelectorAll(".actual_reimbursement_total_amt").forEach(element => {
                element.innerText = "$" + formatNumber(actualReimbursementTotalAmt);
            });
        } else {
            document.getElementById("actual_reimbursement_bluecross").innerText = "";
            document.getElementById("actual_reimbursement_bluecross_cal").innerText = "";
            actualReimbursementBlueCrossAmt = 0
            document.getElementById("actual_reimbursement_bluecross_amt").innerText = "";
        }
    }
    if(type == "revenueHighmark"){
        actualReimbursementHighmark = val
        if(actualReimbursementHighmark > 0) {
            // Static Budget Volume for BlueCross 
            document.getElementById("actual_reimbursement_highmark").innerText = '$' + actualReimbursementHighmark;
            document.getElementById("actual_reimbursement_highmark_cal").innerText = "( " + actualReimbursementHighmark + " * " + formatNumber(actualHighmarkAmt) + " )";
            actualReimbursementHighmarkAmt = (actualReimbursementHighmark * actualHighmarkAmt)
            document.getElementById("actual_reimbursement_highmark_amt").innerText = "$" + formatNumber(actualReimbursementHighmarkAmt);
            actualReimbursementTotalAmt = actualReimbursementBlueCrossAmt + actualReimbursementHighmarkAmt
            document.querySelectorAll(".actual_reimbursement_total_amt").forEach(element => {
                element.innerText = "$" + formatNumber(actualReimbursementTotalAmt);
            });
            
        } else {
            document.getElementById("actual_reimbursement_highmark").innerText = "";
            document.getElementById("actual_reimbursement_highmark_cal").innerText = "";
            actualReimbursementHighmarkAmt = 0
            document.getElementById("actual_reimbursement_highmark_amt").innerText = "";
        }
    }
    if(type == "laborInputs"){
        actualLaborInputs = flexibleLaborInputs = val;
        if(flexibleLaborInputs > 0 && flexibleLaborPrices > 0){
            // Variable Labor Inputs Flexible Budget
            document.getElementById("flexible_labor_inputs_cal").innerText = "( " + formatNumber(flexibleLaborInputs) + " hours  * $" + formatNumber(flexibleLaborPrices) + " per hour )";
            flexibleLaborInputAmt = flexibleLaborInputs * flexibleLaborPrices;
            document.getElementById("flexible_labor_inputs_amt").innerText = "$" + formatNumber(flexibleLaborInputAmt);
        }
        if(actualLaborInputs > 0 && actualLaborPrices > 0){
            // Variable Labor Inputs Flexible Budget
            document.getElementById("actual_labor_inputs_cal").innerText = "( " + formatNumber(actualLaborInputs) + " hours  * $" + formatNumber(actualLaborPrices) + " per hour )";
            actualLaborInputAmt = actualLaborInputs * actualLaborPrices
            document.getElementById("actual_labor_inputs_amt").innerText = "$" + formatNumber(actualLaborInputAmt);
        }

        if(actualLaborInputs > 0){
            document.getElementById("flexible_labor_inputs").innerText = "$" + formatNumber(flexibleLaborInputs);
            document.getElementById("actual_labor_inputs").innerText = "$" + formatNumber(flexibleLaborInputs);
        }
        
        if(actualLaborInputs <= 0){
            document.getElementById("flexible_labor_inputs").innerText = "";
            document.getElementById("actual_labor_inputs").innerText = "";

            document.getElementById("flexible_labor_inputs_cal").innerText = '';
            actualLaborInputAmt = flexibleLaborInputAmt = 0;
            document.getElementById("flexible_labor_inputs_amt").innerText = "";

            
            document.getElementById("actual_labor_inputs_cal").innerText = "";
            document.getElementById("actual_labor_inputs_amt").innerText = "";
        }
        updateVariableTotal()
    }
    if(type == "suppliesInputs"){
        actualSuppliesInputs = flexibleSuppliesInputs = val;
        if(flexibleSuppliesInputs > 0 && flexibleSuppliesPrices > 0){
            // Variable Labor Inputs Flexible Budget
            document.getElementById("flexible_supplies_inputs_cal").innerText = "( $" + formatNumber(flexibleSuppliesInputs) + " hours  * $" + formatNumber(flexibleSuppliesPrices) + " per hour )";
            flexibleSuppliesInputAmt = flexibleSuppliesInputs * flexibleSuppliesPrices;
            document.getElementById("flexible_supplies_inputs_amt").innerText = "$" + formatNumber(flexibleSuppliesInputAmt);
        }
        if(actualSuppliesInputs > 0 && actualSuppliesPrices > 0){
            // Variable Labor Inputs Flexible Budget
            document.getElementById("actual_supplies_inputs_cal").innerText = "( $" + formatNumber(actualSuppliesInputs) + " hours  * $" + formatNumber(actualSuppliesPrices) + " per hour )";
            actualSuppliesInputAmt = actualSuppliesInputs * actualSuppliesPrices
            document.getElementById("actual_supplies_inputs_amt").innerText = "$" + formatNumber(actualSuppliesInputAmt);
        }
        if(actualSuppliesInputs > 0){
            document.getElementById("flexible_supplies_inputs").innerText = "$" + formatNumber(flexibleSuppliesInputs);
            document.getElementById("actual_supplies_inputs").innerText = "$" + formatNumber(flexibleSuppliesInputs);
        }
        if(actualSuppliesInputs <= 0){
            document.getElementById("flexible_supplies_inputs").innerText = "";
            document.getElementById("actual_supplies_inputs").innerText = "";

            document.getElementById("flexible_supplies_inputs_cal").innerText = "";
            flexibleSuppliesInputAmt = actualSuppliesInputAmt = 0;
            document.getElementById("flexible_supplies_inputs_amt").innerText = "";

            document.getElementById("actual_supplies_inputs_cal").innerText = "";
            actualSuppliesInputAmt = 0
            document.getElementById("actual_supplies_inputs_amt").innerText = "";
        }
        updateVariableTotal()
    }
    if(type == "laborPrices"){
        actualLaborPrices = val;
        if(actualLaborInputs > 0 && actualLaborPrices > 0){
            // Variable Labor Inputs Actual Budget
            document.getElementById("actual_labor_inputs_cal").innerText = "( $" + formatNumber(actualLaborInputs) + " hours  * $" + formatNumber(actualLaborPrices) + " per hour )";
            actualLaborInputAmt = actualLaborInputs * actualLaborPrices
            document.getElementById("actual_labor_inputs_amt").innerText = "$" + formatNumber(actualLaborInputAmt);
        }
        if(actualLaborPrices > 0){
            document.getElementById("actual_labor_prices").innerText = "$" + formatNumber(flexibleLaborPrices);
        }
        if(actualLaborPrices <= 0) {
            // document.getElementById("flexible_labor_prices").innerText = "";
            document.getElementById("actual_labor_prices").innerText = "";
            actualLaborInputAmt = flexibleLaborInputAmt = 0;
            
            document.getElementById("actual_labor_inputs_cal").innerText = "";
            document.getElementById("actual_labor_inputs_amt").innerText = "";
        }
        updateVariableTotal()
    }
    if(type == "suppliesPrices"){
        actualSuppliesPrices = val;
        if(actualSuppliesInputs > 0 && actualSuppliesPrices > 0){
            // Variable Labor Inputs Actual Budget
            document.getElementById("actual_supplies_inputs_cal").innerText = "( $" + formatNumber(actualSuppliesInputs) + " units  * $" + formatNumber(actualSuppliesPrices) + " per unit )";
            actualSuppliesInputAmt = actualSuppliesInputs * actualSuppliesPrices
            document.getElementById("actual_supplies_inputs_amt").innerText = "$" + formatNumber(actualSuppliesInputAmt);
        }
        if(actualSuppliesPrices > 0){
            document.getElementById("actual_supplies_prices").innerText = "$" + formatNumber(actualSuppliesPrices);
        }
        if(actualSuppliesPrices <= 0) {
            // document.getElementById("flexible_labor_prices").innerText = "";
            document.getElementById("actual_supplies_prices").innerText = "";
            actualSuppliesInputAmt = flexibleLaborInputAmt = 0;
            
            document.getElementById("actual_supplies_inputs_cal").innerText = "";
            document.getElementById("actual_supplies_inputs_amt").innerText = "";
        }
        updateVariableTotal()
    }
    updateTotalProfit()
        
}
// Define budget variables
let staticVisit = 90000;
let flexibleVisit = 100000;
let actualVisit = 100000;


let staticBlueCross = 40;
let flexibleBlueCross = staticBlueCross; // Initialize variable
let actualBlueCross = 0; // Initialize variable

// Initialize Amount Value for other variables(BlueCross)
let staticBlueCrossAmt = 0;
let flexibleBlueCrossAmt = 0;
let actualBlueCrossAmt = 0;


let staticHighmark = 60;
let flexibleHighmark = staticHighmark; 
let actualHighmark = 0; // Initialize variable

// Initialize Amount Value for other variables(BlueCross)
let staticHighmarkAmt = 0;
let flexibleHighmarkAmt = 0;
let actualHighmarkAmt = 0;

let staticTotalAmt = 0;
let flexibleTotalAmt = 0;
let actualTotalAmt = 0;


let staticReimbursementBlueCross = 25;
let flexibleReimbursementBlueCross = staticReimbursementBlueCross; // Initialize variable
let actualReimbursementBlueCross = 0;// Initialize variable

// Initialize Amount Value for other variables(BlueCross)
let staticReimbursementBlueCrossAmt = 0;
let flexibleReimbursementBlueCrossAmt = 0;
let actualReimbursementBlueCrossAmt = 0;


let staticReimbursementHighmark = 20, flexibleReimbursementHighmark = staticReimbursementHighmark, actualReimbursementHighmark = 0; // Initialize variable

// Initialize Amount Value for other variables(BlueCross)
let staticReimbursementHighmarkAmt = 0, flexibleReimbursementHighmarkAmt = 0, actualReimbursementHighmarkAmt = 0;

let staticReimbursementTotalAmt = 0;
let flexibleReimbursementTotalAmt = 0;
let actualReimbursementTotalAmt = 0;

// Variable Costs
let staticLaborInputs = 48000, flexibleLaborInputs = 0, actualLaborInputs = 0;

let staticSuppliesInputs = 100000, flexibleSuppliesInputs = 0, actualSuppliesInputs = 0;

let staticLaborPrices = 25, flexibleLaborPrices = staticLaborPrices, actualLaborPrices = 0;

let staticSuppliesPrices = 1.50, flexibleSuppliesPrices = staticSuppliesPrices, actualSuppliesPrices = 0;

let staticLaborInputAmt = 0, flexibleLaborInputAmt = 0, actualLaborInputAmt = 0;
let staticSuppliesInputAmt = 0, flexibleSuppliesInputAmt = 0, actualSuppliesInputAmt = 0;
let staticVariableTotalAmt = 0, flexibleVariableTotalAmt = 0, actualVariableTotalAmt = 0;

let staticFixedCosts = 500000, flexibleFixedCosts = staticFixedCosts, actualFixedCosts = staticFixedCosts;


let staticProfit = 0, flexibleProfit =0, actualProfit = 0;

// Total FF Visits 
document.getElementById("static_visit").innerText = formatNumber(staticVisit);
document.getElementById("flexible_visit").innerText = formatNumber(flexibleVisit);
document.getElementById("actual_visit").innerText = formatNumber(actualVisit);


// Static Budget Volume for BlueCross 
document.getElementById("static_bluecross").innerText = staticBlueCross + "%";
document.getElementById("static_bluecross_cal").innerText = "( " + staticBlueCross + " % " + " of "+ formatNumber(staticVisit) + " )";
staticBlueCrossAmt = (staticBlueCross * staticVisit) / 100
document.getElementById("static_bluecross_amt").innerText = '$' + formatNumber(staticBlueCrossAmt) ;

// Flexible Budget Volume for BlueCross 
document.getElementById("flexible_bluecross").innerText = flexibleBlueCross + "%";
document.getElementById("flexible_bluecross_cal").innerText = "( " + flexibleBlueCross + " % " + " of "+ formatNumber(flexibleVisit) + " )";
flexibleBlueCrossAmt = (flexibleBlueCross * flexibleVisit) / 100
document.getElementById("flexible_bluecross_amt").innerText = '$' + formatNumber(flexibleBlueCrossAmt);


// Static Budget Volume for Highmark 
document.getElementById("static_highmark").innerText = staticHighmark + "%";
document.getElementById("static_highmark_cal").innerText = "( " + staticHighmark + " % " + " of "+ formatNumber(staticVisit) + " )";
staticHighmarkAmt = (staticHighmark * staticVisit) / 100
document.getElementById("static_highmark_amt").innerText = '$' + formatNumber(staticHighmarkAmt);

// Flexible Budget Volume for BlueCross 
document.getElementById("flexible_highmark").innerText = flexibleHighmark + "%";
document.getElementById("flexible_highmark_cal").innerText = "( " + flexibleHighmark + " % " + " of "+ formatNumber(flexibleVisit) + " )";
flexibleHighmarkAmt = (flexibleHighmark * flexibleVisit) / 100
document.getElementById("flexible_highmark_amt").innerText = '$' + formatNumber(flexibleHighmarkAmt);


// Total Volume Costs
staticTotalAmt = staticBlueCrossAmt + staticHighmarkAmt
document.getElementById("static_total_amt").innerText = '$' + formatNumber(staticTotalAmt);
flexibleTotalAmt = flexibleBlueCrossAmt + flexibleHighmarkAmt
document.getElementById("flexible_total_amt").innerText = '$' + formatNumber(flexibleTotalAmt);

// Static Reimbursement for BlueCross 
document.getElementById("static_reimbursement_bluecross").innerText = "$" + staticReimbursementBlueCross;
document.getElementById("static_reimbursement_bluecross_cal").innerText = "( " + staticReimbursementBlueCross + " * " + formatNumber(staticBlueCrossAmt) + " )";
staticReimbursementBlueCrossAmt = (staticReimbursementBlueCross * staticBlueCrossAmt)
document.getElementById("static_reimbursement_bluecross_amt").innerText = "$" + formatNumber(staticReimbursementBlueCrossAmt);

// Flexible Reimbursement for BlueCross 
document.getElementById("flexible_reimbursement_bluecross").innerText = '$' + flexibleReimbursementBlueCross;
document.getElementById("flexible_reimbursement_bluecross_cal").innerText = "( " + flexibleReimbursementBlueCross + " * " + formatNumber(flexibleBlueCrossAmt) + " )";
flexibleReimbursementBlueCrossAmt = (flexibleReimbursementBlueCross * flexibleBlueCrossAmt)
document.getElementById("flexible_reimbursement_bluecross_amt").innerText = "$" + formatNumber(flexibleReimbursementBlueCrossAmt);

// Static Reimbursement for Highmark 
document.getElementById("static_reimbursement_highmark").innerText = "$" + staticReimbursementHighmark;
document.getElementById("static_reimbursement_highmark_cal").innerText = "( " + staticReimbursementHighmark + " * " + formatNumber(staticHighmarkAmt) + " )";
staticReimbursementHighmarkAmt = (staticReimbursementHighmark * staticHighmarkAmt)
document.getElementById("static_reimbursement_highmark_amt").innerText = "$" + formatNumber(staticReimbursementHighmarkAmt);

// Flexible Reimbursement for BlueCross 
document.getElementById("flexible_reimbursement_highmark").innerText = '$' + flexibleReimbursementHighmark;
document.getElementById("flexible_reimbursement_highmark_cal").innerText = "( " + flexibleReimbursementHighmark + " * " + formatNumber(flexibleHighmarkAmt) + " )";
flexibleReimbursementHighmarkAmt = (flexibleReimbursementHighmark * flexibleHighmarkAmt)
document.getElementById("flexible_reimbursement_highmark_amt").innerText = "$" + formatNumber(flexibleReimbursementHighmarkAmt);


staticReimbursementTotalAmt = staticReimbursementBlueCrossAmt + staticReimbursementHighmarkAmt
document.querySelectorAll(".static_reimbursement_total_amt").forEach(element => {
    element.innerText = "$" + formatNumber(staticReimbursementTotalAmt);
});

flexibleReimbursementTotalAmt = flexibleReimbursementBlueCrossAmt + flexibleReimbursementHighmarkAmt
document.querySelectorAll(".flexible_reimbursement_total_amt").forEach(element => {
    element.innerText = "$" + formatNumber(flexibleReimbursementTotalAmt);
});

// Variable Labor Inputs static Budget
document.getElementById("static_labor_inputs").innerText = formatNumber(staticLaborInputs);
document.getElementById("static_labor_prices").innerText = "$" + formatNumber(staticLaborPrices);
document.getElementById("static_labor_inputs_cal").innerText = "( " + formatNumber(staticLaborInputs) + " hours  * $" + formatNumber(staticLaborPrices) + " per hour )";
staticLaborInputAmt = staticLaborInputs * staticLaborPrices;
document.getElementById("static_labor_inputs_amt").innerText = "$" + formatNumber(staticLaborInputAmt);


// Variable Supplies Inputs static Budget
document.getElementById("static_supplies_inputs").innerText = formatNumber(staticSuppliesInputs);
document.getElementById("static_supplies_inputs_cal").innerText = "( " + formatNumber(staticSuppliesInputs) + " units  * $" + formatNumber(staticSuppliesPrices) + " per unit )";
staticSuppliesInputAmt = staticSuppliesInputs * staticSuppliesPrices;
document.getElementById("static_supplies_inputs_amt").innerText = "$" + formatNumber(staticSuppliesInputAmt);

staticVariableTotalAmt = staticLaborInputAmt + staticSuppliesInputAmt;
document.querySelectorAll(".static_variable_total_amt").forEach(element => {
    element.innerText = "$" + formatNumber(staticVariableTotalAmt);
});

document.getElementById("static_variable_per_visit_cal").innerText = "( $" + formatNumber(staticVariableTotalAmt) + " / $" + formatNumber(staticVisit) + " )";
document.getElementById("static_variable_per_visit").innerText = "$" + formatNumber(staticVariableTotalAmt / staticVisit);


// Variable Labor Inputs Flexible Budget
document.getElementById("flexible_labor_prices").innerText = "$" + formatNumber(flexibleLaborPrices);
document.getElementById("static_supplies_prices").innerText = "$" + formatNumber(staticSuppliesPrices);
document.getElementById("flexible_supplies_prices").innerText = "$" + formatNumber(flexibleSuppliesPrices);


// Fixed costs
document.querySelectorAll(".static_fixed_costs").forEach(element => {
    element.innerText = "$" + formatNumber(staticFixedCosts);
});
document.querySelectorAll(".flexible_fixed_costs").forEach(element => {
    element.innerText = "$" + formatNumber(flexibleFixedCosts);
});
document.querySelectorAll(".actual_fixed_costs").forEach(element => {
    element.innerText = "$" + formatNumber(actualFixedCosts);
});


document.getElementById("static_total_profit_amt_cal").innerText =  "$" + formatNumber(staticReimbursementTotalAmt) +  " - ( $" + formatNumber(staticVariableTotalAmt) + " + $" + formatNumber(staticFixedCosts) + " )";
staticProfit = staticReimbursementTotalAmt - (staticVariableTotalAmt + staticFixedCosts)
document.getElementById("static_total_profit_amt").innerText = "$" + formatNumber(staticProfit);



updateTotalProfit()


// function to generate pdf
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 10; // Initial Y position

    // Get all tables
    const tables = document.querySelectorAll("table");

    tables.forEach((table, index) => {
        if (index > 0) y += 10; // Space between tables
        
        const data = [];
        const rows = table.querySelectorAll("tr");

        rows.forEach(row => {
            const rowData = [];
            row.querySelectorAll("th, td").forEach(cell => {
                let value = cell.innerText; // Default text content

                const input = cell.querySelector("input"); // Check for input field
                if (input) {
                    value = input.value; // Get value from input field
                }

                rowData.push(value);
            });
            data.push(rowData);
        });

        doc.autoTable({
            head: [data[0]], // Header row
            body: data.slice(1), // Body rows
            startY: y
        });

        y = doc.lastAutoTable.finalY + 10; // Update Y position for next table
    });

    doc.save("results.pdf");
}