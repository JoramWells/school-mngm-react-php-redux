import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const getURL = 'http://localhost/reportcard/server/students/getStudentPerformance.php'
const addURL = 'http://localhost/reportcard/server/students/createStudentPerformance.php'
const getIDURL = 'http://localhost/reportcard/server/students/selectStudentPerformanceById.php'



const initialState = {
    updateState: false,
    loading: false,
    data: [],
    error: null,
    response: ''
}

export const fetchPerformance = createAsyncThunk(
    'performance/fetchPerformance',
    async () => {
        const response = await axios.get(getURL)
        return response.data
    }
)

export const addPerformance = createAsyncThunk(
    'performance/addPerformance',
    async (formData) => {
        const response = await axios.post(addURL, formData)
        console.log(response)
        return response.data
    }
)

export const getStudentPerformanceID = createAsyncThunk(
    'performance/getStudentPerformanceID',
    async(id)=>{
        const response = await axios.get(`${getIDURL}?id=${id}`)
        return response.data
    }
)

const performanceSlice = createSlice({
    name: 'performance',
    initialState,
    reducers: {
        changeState: (state) => {
            state.updateState = true
        },
        changeStateFalse: (state) => {
            state.updateState = false
        },
        clearResponse: (state) => {
            state.response = '';
        }


    },
    extraReducers: builder => {
        builder
            .addCase(addPerformance.pending, (state) => {
                state.loading = true
            })
            .addCase(addPerformance.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload)
                state.response = 'successfully added course'
            })
            .addCase(addPerformance.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
        builder
            .addCase(fetchPerformance.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchPerformance.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
})

export const { changeState, changeStateFalse, clearResponse } = performanceSlice.actions


export default performanceSlice.reducer