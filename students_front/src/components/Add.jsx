import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {
    const [student, setStudent] = useState("")
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        console.log('e in submit e.target', e.target)
        console.log('e in submit e.target[0].value', e.target[0].value)
        console.log('e in submit e.target.student.value', e.target.student.value)

        console.log('Student in state', student)

        const url = 'http://localhost:3003/students'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: student
            }),
            headers: new Headers({ 'content-type': 'application/json' })
        }).then(res => {
                console.log('in response')
                navigate('/', { replace: true })
            })

    }

    const inputChange = (e) => {
        console.log('inputchange e.target.value', e.target.value)
        setStudent(e.target.value)
    }
    return (
        <div className="App">
            <form onSubmit={submit}>
                <input onChange={inputChange} name="student" type="text" placeholder="Type a student name" />
                <button type="submit">Add a student</button>
            </form>
        </div>
    )
}

