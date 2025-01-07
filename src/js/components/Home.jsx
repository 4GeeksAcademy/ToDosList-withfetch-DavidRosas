import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [newTask, setNewTask] = useState("")
	const [pendingTasks, setPendingTasks] = useState([])
	return (
		<div className="text-center my-3">
			<h1 >ToDos</h1>
			<div className="d-flex row">

				<input type="text" 
					onChange={(event) => {
						setNewTask(event.target.value)
					}}

					onKeyDown={(event) => {
						if (event.key == "Enter") {
							setPendingTasks([...pendingTasks, newTask])
							setNewTask("")
						}
					}}

					value={newTask} className="form-control m-5" 
				/>


				{pendingTasks.map(task =>
					<div >
						<p style={{ border: "1px solid black" }} key={task}>{task}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;

// use filter funtion to remove the tasks



