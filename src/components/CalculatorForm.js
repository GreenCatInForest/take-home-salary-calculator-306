export const CalculatorForm = () => {
  return (
    <div className="p-3 border">
      <form>
        <div className="mb-3">
          <label htmlFor="taxYear" className="form-label">
            Select Tax Year
          </label>
          <select
            id="taxYear"
            className="form-select"
            aria-label="Select tax year"
            value="2021/2022"
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
          />
          <div id="grossSalaryError" className="form-text text-danger">
            Please enter your gross annual.
          </div>
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
