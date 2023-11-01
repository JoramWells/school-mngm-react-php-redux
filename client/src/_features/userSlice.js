import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const registerURL = 'http://localhost/reportcard/server/auth/register.php'
const deleteUrl = 'http://localhost/reportcard/server/students/deleteStudent.php';
const editUrl = 'http://localhost/reportcard/server/students/editStudent.php';
const loginURL = 'http://localhost/reportcard/server/auth/login.php'

const initialState = {
    data: [],
    status: 'idle',
    loading: false,
    error: null,
    response: ''
}

export const fetchUsers = createAsyncThunk(
    'data/fetchUsers',
    async () => {
        const url = 'http://localhost/reportcard/server/students/viewAllStudents.php';
        const response = await axios.get(url)
        return response.data

    }
)

export const registerUser2 = createAsyncThunk(
    'data/registerUser',
    async (formData) => {
        const response = await axios.post(registerURL, formData)
        return response.data

    }
)

export const loginUser = createAsyncThunk(
    'data/loginUser',
    async (formData) => {
        const response = await axios.post(loginURL, formData)
        return response.data
    }
)

export const deleteUser = createAsyncThunk(
    'data/deleteUser',
    async (id) => {
        const response = await axios.delete(`${deleteUrl}?id=${id}`)
        return response.data
    }
)

export const editUser = createAsyncThunk(
    'data/editUser',
    async (formData) => {
        const data = new FormData(formData)
        const id = data.get('id')
        const response = await axios.put(`${editUrl}?id=${id}`, formData)
        return response.data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(inputValues) {
                return {
                    payload: inputValues
                }
            }
        },
        getAllUsers: {
            reducer(state, action) {
                state.push(action.payload)
            }
        },
        registerUser: {
            async reducer(state, action) {

                // convert to formdata
                const formData = new FormData()
                for (const key in action.payload) {
                    formData.append(key, action.payload[key])
                }
                await axios.post(registerURL, formData)
                    .then(response => {
                        console.log(response)
                        state.push(response.data)
                    })
                    .catch(err => console.log(err))
                    ;
                return action.payload
            },
            prepare(inputValues) {
                return {
                    payload: inputValues
                }
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser2.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser2.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload)
                state.response = 'registered'
            })
            .addCase(registerUser2.rejected, (state, action) => {
                state.error = action.error.message
            })
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
        builder.addCase(editUser.fulfilled, (state, action) => {
            const updateItem = action.payload
            const index = state.data.findIndex(
                item => item.id === updateItem.id
            )
            if (index !== -1) {
                state.data[index] = updateItem
            }
            state.response = "update"
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.data = state.data.filter(
                item => item.id !== action.payload
            )
        })

        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload)
                state.response = 'login'

            })
            .addCase(loginUser.pending, (state)=>{
                state.loading = true
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.error.message
            })

    }

})

export const selecteUser = state => state;

export const { registerUser } = userSlice.actions

export default userSlice.reducer;