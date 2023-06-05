import { useState } from "react";
import { CalculatorForm } from "./CalculatorForm";
import { Result } from "./Result";

export const Calculator = () => {
  const [result, setResult] = useState();

  const calculate = (taxYear, grossAnnualSalary) => {
    console.log(taxYear);
    console.log(grossAnnualSalary);

    // deduct personal tax allowance from grossAnnualSalary
    const taxableIncome = grossAnnualSalary - 12500;

    // get tax percentage from tax year selected
    const taxPercentage = 40;

    // calculate the tax applied
    const taxAmount = (taxPercentage * taxableIncome) / 100;

    // deduct tax from grossAnnualSalary
    const takeHomeSalary = grossAnnualSalary - taxAmount;

    setResult({
      grossAnnualSalary,
      taxableIncome,
      taxPercentage,
      taxAmount,
      takeHomeSalary,
    });
  };

  return (
    <div className="p-3 border">
      <CalculatorForm calculate={calculate} />
      {result && <Result result={result} />}
    </div>
  );
};
