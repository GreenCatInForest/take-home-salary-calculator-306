export const Result = ({ result }) => {
  return (
    <div className="my-3">
      <ul className="list-group">
        <li className="list-group-item">
          Annual salary: {result.grossAnnualSalary}
        </li>
        <li className="list-group-item">
          Taxable Income: {result.taxableIncome}
        </li>
        <li className="list-group-item">
          Tax Percentage: {result.taxPercentage}
        </li>
        <li className="list-group-item">Tax Amount: {result.taxAmount}</li>
        <li className="list-group-item">
          Take Home Salary: {result.takeHomeSalary}
        </li>
      </ul>
    </div>
  );
};
