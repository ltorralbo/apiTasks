import { useCreateTaskMutation } from '../redux/services/taskApi.ts'
import { form, input, button} from './TaskForm.css.ts'
import toast from 'react-hot-toast';

const TaskForm = () => {

    const [createTask , { error }] = useCreateTaskMutation()

    const handleSubmit = (e: any) =>{

        if (e.target.elements.description.value.trim() == ""){
            toast.error('El campo descripción no puede estar vacio')
            return null
        }
        
        const descripcion = e.target.elements.description.value.trim();
        const vigente     = e.target.elements.vigente.checked
        let now = new Date();
        const task = {
            'descripcion' : descripcion,
            'fechaCreacion' : now,
            'vigente' : vigente
        }

        createTask(task);
        if(!error){
            toast.success('Tarea creada')
        }else{
            toast.error('No se pudo crear la tarea')
        }
    }

    return(
        <form  className={form} onSubmit={handleSubmit}>
            <label>Descripción</label>
            <textarea className={input} type="textarea" name="description" /> 
            <label>Vigente</label>
            <input  type="checkbox" name="vigente" />
            <button className={button} type='submit'>Crear</button>
        </form>
    )
}

export default TaskForm