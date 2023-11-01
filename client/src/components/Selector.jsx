import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { fetchUsers } from '../_features/userSlice'

const Selector = ({selectedStudent, setSelectedStudent}) => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.user)


    const options = data.map(item => {
        return { value: item.id, label: item.userName }
    })

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

  return (
    <Select
    defaultValue={selectedStudent}
    onChange={setSelectedStudent}
    options={options}
/>
  )
}

export default Selector