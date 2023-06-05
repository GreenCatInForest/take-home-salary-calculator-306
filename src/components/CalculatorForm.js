import { useState } from "react";

export const CalculatorForm = ({ calculate }) => {
  const [taxYear, setTaxYear] = useState("2021/2022");
  const [grossAnnualSalary, setGrossAnnualSalary] = useState("");
  const [error, setError] = useState("");

  const handleOnChangeTaxYear = (event) => {
    setTaxYear(event.currentTarget.value);
  };

  const handleOnChangeGrossSalary = (event) => {
    setGrossAnnualSalary(event.currentTarget.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (grossAnnualSalary && grossAnnualSalary > 0) {
      setError("");

      calculate(taxYear, grossAnnualSalary);
    } else {
      setError("Please enter your gross annual.");
    }
  };

  return (
    <div className="p-3 border">
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="taxYear" className="form-label">
            Select Tax Year
          </label>
          <select
            id="taxYear"
            className="form-select"
            aria-label="Select tax year"
            value={taxYear}
            onChange={handleOnChangeTaxYear}
          >
            <option value="2021/2022">2021/2022</option>
            <option value="2022/2023">2022/2023</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="grossSalary" className="form-label">
            Gross Annual Salary
          </label>
          <input
            type="number"
            className="form-control"
            id="grossSalary"
            aria-describedby="gross annual salary"
            placeholder="Enter your gross annual salary"
            value={grossAnnualSalary}
            onChange={handleOnChangeGrossSalary}
          />
          {error && (
            <div id="grossSalaryError" className="form-text text-danger">
              {error}
            </div>
          )}
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-success">
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};
