    const calculateSipStepUp = inputData => {
    const { monthlySavings, yearlyIncrement, investmentPeriod, rateOfReturn } = inputData
    const months = investmentPeriod * 12
    const rate = rateOfReturn / 12

    let graph = [{
        // year: 0,
            sipStepUp: 0,
            totalInvestmentTillDate :0
    }]
    let sipStepUpSavings = monthlySavings
    let sipStepUpGrowth = 0
    let totalInvestmentTillDate = 0;

    for (let i = 1; i <= months; i++) {
        if (i % 12 == 1 && i != 1) sipStepUpSavings=sipStepUpSavings+(sipStepUpSavings*(yearlyIncrement /100)) ;
        sipStepUpGrowth += sipStepUpSavings * Math.pow(1 + rate / 100, i)
        totalInvestmentTillDate += sipStepUpSavings;
        if(i%12 == 0) { 
            graph.push({
            year: i/12,
            sipStepUp: Math.floor(sipStepUpGrowth),
            totalInvestmentTillDate : Math.floor(totalInvestmentTillDate)
            })
        }
    }

    const data = {
        monthlySavings,
        investmentPeriod,
        yearlyIncrement,
        totalSipStepUpAmount: Math.floor(sipStepUpGrowth),
        graph
    }

    return data
}

module.exports = { calculateSipStepUp }
