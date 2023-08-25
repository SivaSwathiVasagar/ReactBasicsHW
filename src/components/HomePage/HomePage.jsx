import EmployeeList from "../EmployeeList/EmployeeList";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import Header from "../Header/Header";
import Searchbar from "../SearchBar/SearchBar";
import "./homePage.css";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Header title="Employee Directory" />
      <Searchbar />
      <EmployeeList />
    </div>
  );
}
