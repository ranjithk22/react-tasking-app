import { configureStore, combineReducers } from "@reduxjs/toolkit"
import TasksReducer from "./TasksReducer"

const Store = configureStore({
    reducer: { TasksReducer }
})
export default Store