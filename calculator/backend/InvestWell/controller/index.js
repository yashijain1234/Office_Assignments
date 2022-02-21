const { calculateSipStepUp } = require("../services/index")
const constants = require("../constants/index.json")

const sipStepUpCalculator = (req, res) => {
    const data = req.body
    if (
        !data.monthlySavings ||
        data.monthlySavings <= 0 ||
        !data.yearlyIncrement ||
        data.yearlyIncrement <= 0 ||
        !data.investmentPeriod ||
        data.investmentPeriod <= 0 ||
        !data.rateOfReturn ||
        data.rateOfReturn <= 0
    )
        res.status(200).send(constants.failed)
    else {
        const result = calculateSipStepUp(data)
        res.send(result)
    }
}

module.exports = { sipStepUpCalculator }
