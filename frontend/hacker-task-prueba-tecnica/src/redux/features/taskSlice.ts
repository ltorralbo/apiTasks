import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: 0
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
    }
})

export const {  } = taskSlice.actions
export default taskSlice.reducer