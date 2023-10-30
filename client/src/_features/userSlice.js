import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const registerURL = 'http://localhost/reportcard/server/auth/register.php'


const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fetchUsers = createAsyncThunk(
    'data/fetchUsers',
    async () => {
        const url = 'http://localhost/reportcard/server/students/viewAllStudents.php';
        const response = await axios.get(url)
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
    }

})

export const selecteUser = state => state;

export const { loginUser, registerUser } = userSlice.actions

export default userSlice.reducer;