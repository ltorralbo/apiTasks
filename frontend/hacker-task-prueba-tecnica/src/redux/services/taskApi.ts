import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

type Task = {
    id: number,
    name: string,
    email: string,
    username: string
} 

export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:8080/api/'
    }),
    endpoints: (builder) => ({
        //Listar tareas
        getTasks: builder.query<Task[], null>({
            query: () => 'tasks',
            // @ts-expect-error
            providesTags: ["Tasks"],
            transformResponse: (response: any) => response.sort((a: any, b:any) => b.id - a.id)
        }),
        //Agregar tarea
        createTask: builder.mutation({
            query: (newTask) => ({
                url: "tasks",
                method: "POST",
                body: newTask
            }),
            // @ts-expect-error
            invalidatesTags: ["Tasks"]
        }),
        //Editar tarea
         updateTask: builder.mutation({
            query: (updatedTask) => ({
                url: `tasks/${updatedTask.id}`,
                method: "PUT",
                body: updatedTask,
            }),
            // @ts-expect-error
            invalidatesTags: ["Tasks"],
        }),
        //Borrar tarea
        deleteTask: builder.mutation({
            query: (taskId) => ({
                url: `tasks/${taskId}`,
                method: "DELETE",
            }),
            // @ts-expect-error
            invalidatesTags: ["Tasks"],
        }),
    })
})

export const { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation,
  useDeleteTaskMutation} = taskApi