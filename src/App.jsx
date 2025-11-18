import './App.css'
import Student from "./Student.jsx";

function App() {
    const student = {
        name: "Tomer",
        exam: 60,
        homework: 40
    }

    return (
        <div>
            <Student data={student}/>
        </div>
    )
}

export default App
