export function calculateSIPReturns(monthlyInvestment, timePeriod, expectedReturnRate) {
    const periodicRate = expectedReturnRate / 100 / 12; // Convert annual return rate to monthly rate
    const n = timePeriod * 12; // Convert time period from years to months
  
    const numerator = Math.pow(1 + periodicRate, n) - 1;
    const denominator = periodicRate;
  
    const M = monthlyInvestment * (numerator / denominator) * (1 + periodicRate);
    return M.toFixed(2); // Return the calculated amount rounded to 2 decimal places
  }
  