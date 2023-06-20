import {configureStore} from "@reduxjs/toolkit"
import taskReducer from './features/taskSlice'
import {taskApi} from "../redux/services/taskApi"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export interface atore {
    tasks: []
}

export const store = configureStore({
    reducer: {
        taskReducer,
        [taskApi.reducerPath]: taskApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([taskApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
