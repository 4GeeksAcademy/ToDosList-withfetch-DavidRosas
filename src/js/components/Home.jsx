import React from "react";
import { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {

const urlApi = "https://playground.4geeks.com/todo/users/Santy"

const [newTask, setNewTask] = useState("")
const [pendingTasks, setPendingTasks] = useState([])

const fetchTasks = async function () {
	let response = await fetch(urlApi)
	const data = await response.json()
	setPendingTasks(data.todos)
}

const urlTodos = "https://playground.4geeks.com/todo/todos/Santy"

	const creatingThetask = async () => { 
		const requestOptions = {  
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ 
			label: newTask, is_done: false
		}),
		};
		try { 
			const response = await fetch( urlTodos, requestOptions)
			const data = await response.json()
			await fetchTasks()
			setNewTask ("")
		}
		catch(error) { 
			console.log("error", error)
		}
    }


const urlDeleting = (id) => "https://playground.4geeks.com/todo/todos/"+id

	const deletingTask = async (id) => {
		const requestOptions = {  
			method: "DELETE",
			headers: {
				'Content-Type': 'application/json'
			 },
			body: JSON.stringify({ 
				label: newTask, is_done: false
			}),
			};
			try { 
				const response = await fetch( urlDeleting(id), requestOptions)
				await fetchTasks()
			}
			catch(error) { 
				console.log("error", error)
			}

	}



useEffect (() => {
	fetchTasks()
} ,[])

const Pendingtask = (props) => {
	const [hidden, setHidden] = useState(true)
	return <div
		onMouseEnter={() => { setHidden(false) }}
		onMouseLeave={() => { setHidden(true) }}
		className="form-control d-flex justify-content-between" style={{ backgroundColor: "white", width: "1000px" }} >
		<p className="text-start mx-3"
			style={{ marginBottom: "0" }}
			key={props.task}>{props.task}
		</p>
		<div className="d-flex aling-items-center">
			{
				!hidden && <div className="my-auto"><i className="fa-solid fa-x"
					onClick={() => {
						deletingTask(props.id)
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
							creatingThetask()
						}
					}}

					value={newTask}
					className="form-control mx-auto"
					aria-describedby="inputGroup-sizing-lg"
					aria-label="Sizing example input"
				/>
			</div>
					
			{pendingTasks && pendingTasks.map(task => <Pendingtask key={task.id} task={task.label} id={task.id} />

			)}

			<div className="text-start text-body-tertiary form-control" style={{ width: "1000px" }}>
				<p className="m-0 mx-3">
					{pendingTasks && pendingTasks.length}{" "}item left.
				</p>
			</div>
		</div>
	</div>
);
};

export default Home;

// use filter funtion to remove the tasks



