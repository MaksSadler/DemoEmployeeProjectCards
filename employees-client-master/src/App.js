import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import EmployeesView from "./component/employees/EmployeesView";
import NavBar from "./component/common/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import EmployeeProfile from "./component/employees/EmployeeProfile";
import AddEmployee from "./component/employees/AddEmployee";
import EditEmployee from "./component/employees/EditEmployee";

function App() {
	return (
		<main className="container mt-5">
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-employees"
						element={<EmployeesView />}></Route>
					<Route
						exact
						path="/add-employees"
						element={<AddEmployee />}></Route>
					<Route
						exact
						path="/edit-employee/:id"
						element={<EditEmployee />}></Route>
					<Route
						exact
						path="/employee-profile/:id"
						element={<EmployeeProfile />}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
