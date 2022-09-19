import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasksList: {}
}
const TasksReducer = createSlice({
    name:'TasksReducer',
    initialState,
    reducers: {
        fetchTasks(state, { payload }) {
            return {
                ...state,
                tasksList: payload
            }
        }
    }

})
export const {fetchTasks } = TasksReducer.actions
export default TasksReducer.reducer