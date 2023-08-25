import Header from "../Header/Header";
import "./employeePage.css";

export default function EmployeePage() {
  return (
    <div className="EmployeePage">
      <Header title="Employee" />
      <div className="employeeOverview">
        <div className="ProfileIcon"></div>
        <div className="Profile-info">
          <h2>Julie Taylor</h2>
          <h4>VP of Marketing</h4>
        </div>
      </div>
      <div className="employeeOffice">
        <h3>Call Office</h3>
        <p>781-000-0002</p>
      </div>
      <div className="employeeMobile">
        <h3>Call Mobile</h3>
        <p>617-000-0002</p>
      </div>

      <div className="employeeSMS">
        <h3>SMS</h3>
        <p>617-000-0002</p>
      </div>
      <div className="employeeEmail">
        <h3>Email</h3>
        <p>jtaylor@fakemail.com</p>
      </div>
    </div>
  );
}
