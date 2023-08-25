import "./employeeListItem.css";

export default function EmployeeListItem({ employeeName, employeeTitle }) {
  return (
    <div className="EmployeeListItem">
      <div className="Image"></div>
      <div className="Info">
        <h4>{employeeName}</h4>
        <p>{employeeTitle}</p>
      </div>
    </div>
  );
}
