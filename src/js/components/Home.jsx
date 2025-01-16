import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const erlApi = "1" 

const fetchTasks = [""]







const Home = () => {

	const [newTask, setNewTask] = useState("")
	const [pendingTasks, setPendingTasks] = useState([])

	const Pendingtask = (props) => {
		const [hidden, setHidden] = useState(true)
		return <div
			onMouseEnter={() => { setHidden(false) }}
			onMouseLeave={() => { setHidden(true) }}
			className="form-control d-flex justify-content-between" style={{ backgroundColor: "white", width : "1000px"}} >
			<p className="text-start mx-3"
				style={{ marginBottom: "0"}}
				key={props.task}>{props.task}
			</p>
			<div className="d-flex aling-items-center">
				{
					!hidden &&  <div className="my-auto"><i className="fa-solid fa-x"
						onClick={() => {
							setPendingTasks([...pendingTasks.filter(item => item !== props.task)])
						}}
					>
					</i>
					</div>
				}
			</div>
		</div>
	}

	return (
		<div className=" m-5 ">
			<p className="text-center" style={{ fontSize: "70px" }}>ToDos</p>

			<div className="d-flex row aling-items-center justify-content-center">

				<div className="d-flex input-group-lg">
					<input
						placeholder="Type your pending task here..."
						type="text"
						onChange={(event) => {
							setNewTask(event.target.value)
						}}

						onKeyDown={(event) => {
							if (event.key == "Enter") {
								setPendingTasks([...pendingTasks, newTask])
								setNewTask("")
							}
						}}

						value={newTask}
						className="form-control mx-auto"
						aria-describedby="inputGroup-sizing-lg"
						aria-label="Sizing example input"
					/>
				</div>



				{pendingTasks.map(task => <Pendingtask task={task} />
				)}
				<div className="text-start text-body-tertiary form-control" style={{width : "1000px"}}>
					<p className="m-0 mx-3">
						{pendingTasks.length}{" "}ietm left.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;

// use filter funtion to remove the tasks



