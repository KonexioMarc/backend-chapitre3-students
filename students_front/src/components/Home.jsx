import { useEffect, useState } from 'react'

export default function Home() {
    
    let [ students, setStudents] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3003/students')
            .then(response => response.json())
            .then(response => {
                console.log('Componentdidmount Home', response)
                setStudents(response)
            })

    }, [])

    return (
        <div className="App">
            <ul>
                { students.map(s => {
                    return (
                        <li> {s} </li>
                    )
                }) }

            </ul>
        </div>
    )
}

