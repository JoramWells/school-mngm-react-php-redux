import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const courseURL = 'http://localhost/reportcard/server/programs/getprogram.php'
const addCourseURL = 'http://localhost/reportcard/server/auth/createprogram.php'


const initialState = {
    updateState: false,
    loading: false,
    data: [],
    error: null,
    response: ''
}


export const fetchCourse = createAsyncThunk(
    'course/fetchCourse',
    async () => {
        const response = await axios.get(courseURL)
        return response.data
    }
)

export const addCourse = createAsyncThunk(
    'course/addCourse',
    async (formData) => {
        const response = await axios.post(addCourseURL, formData)
        return response.data

    }
)


const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        changeState: (state) => {
            state.updateState = true
        },
        changeStateFalse: (state) => {
            state.updateState = false;
        },
        clearResponse: (state) => {
            state.response = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCourse.pending, (state) => {
                state.loading = true
            })
            .addCase(addCourse.fulfilled,(state, action)=>{
                state.loading = false
                state.data.push(action.payload)
                state.response = 'add'
            })
            .addCase(addCourse.rejected,(state, action)=>{
                state.loading = false;
                state.error = action.error.message
            })
        builder
            .addCase(fetchCourse.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchCourse.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
})

export default courseSlice.reducer

export const { changeState, changeStateFalse, clearResponse } = courseSlice.actions

