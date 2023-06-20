import { useAppDispatch, useAppSelector} from '../redux/hooks'
import {taskApi, useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation} from "../redux/services/taskApi"
import { CiEdit, CiTrash} from "react-icons/ci"
import { taskButton, taskFooter, taskHeader, taskTitle, taskArticle } from './Home.css'
import TaskForm from '../components/TaskForm'
import toast from 'react-hot-toast';


export default function Home () {
    const tasks = useAppSelector(state => state.taskReducer.tasks)
    const {data, error, isLoading, isFetching} = useGetTasksQuery(null)
    const [deleteTask] = useDeleteTaskMutation()
    const [updateTask] = useUpdateTaskMutation()

    if(isFetching  || isLoading) return <p>Cargando...</p> 
    if(error) return <p>Error...</p>

    const handleDelete = (id: any) =>{
        deleteTask(id)
    }

    return (
        <div>
            <TaskForm />
            <h1>Lista de Tareas</h1>
                {data?.map((task) => 
                    <article className={taskArticle}  key={task.id}>
                        <header className={taskHeader} >
                        <a className={taskTitle}>{task.descripcion}</a> 
                        </header>
                        <input  type="checkbox" name="vigente" checked={task.vigente} onChange={(e) => updateTask({...task,vigente: e.target.checked})} />
                        <footer className={taskFooter}>
                                <CiEdit className={taskButton } size={30}/>
                                <CiTrash className={taskButton} onClick={() => handleDelete(task.id)} size={30}/>
                        </footer>
                        <hr/>
                    </article>
                )}
        </div>
    )
}