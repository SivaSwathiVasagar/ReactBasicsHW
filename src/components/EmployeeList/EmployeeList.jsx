import "./employeeList.css";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
export default function EmployeeList() {
  const EmployeeListObject = [
    { employeeName: "James King", employeeTitle: "President and CEO" },
    { employeeName: "Julie Taylor", employeeTitle: "VP of Marketing" },
    { employeeName: "John Williams", employeeTitle: "VP of Engineering" },
    { employeeName: "Ray Moore", employeeTitle: "Technician" },
    { employeeName: "Paul Jones", employeeTitle: "Program Analyst" },
  ];

  return (
    <div className="EmployeeList">
      {EmployeeListObject.map((item) => {
        return (
          <EmployeeListItem
            employeeName={item.employeeName}
            employeeTitle={item.employeeTitle}
          />
        );
      })}
    </div>
  );
}
