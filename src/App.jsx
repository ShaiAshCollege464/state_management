import './App.css'
import Student from "./Student.jsx";
import React from "react";

class App extends React.Component {
    state = {
        students: [],
        newStudentName: "",
        searchInputName: ""
    }


    render() {
        const filteredList = this.state.students.filter(item => {
            if (item.name.includes(this.state.searchInputName)) {
                return true;
            } else {
                return false;
            }
        });
        return (
            <div>
                <div>
                    <input
                        value={this.state.newStudentName}
                        onChange={(event) => {
                            const currentValue = event.target.value;
                            this.setState({
                                newStudentName: currentValue
                            })
                        }}
                    />
                    <button
                        disabled={this.state.newStudentName.length == 0}
                        onClick={() => {
                            const newStudent = {
                                name: this.state.newStudentName,
                                exam: Math.random() * 100,
                                homework: Math.random() * 100
                            }
                            const studentsArray = this.state.students;
                            //1 -> add this to the array
                            studentsArray.push(newStudent);
                            //2 -> put the updated array back to the state
                            this.setState({
                                students: studentsArray,
                                newStudentName: ""
                            })
                        }}>
                        Add
                    </button>
                    <button disabled={this.state.students.length == 0}
                            onClick={() => {
                                this.setState({students: []})
                            }}
                    >

                        clear
                    </button>
                </div>
                <div>
                    <input placeholder={"Search the list"} value={this.state.searchInputName} onChange={(event) => {
                        this.setState({
                            searchInputName: event.target.value
                        })
                    }}/>
                </div>
                {
                    filteredList.length > 0 ?
                        <div>
                            Displaying {filteredList.length} of {this.state.students.length}
                            {
                                filteredList.map(item => {
                                    return (
                                        <Student data={item}/>
                                    )
                                })
                            }
                        </div> :
                        <div>
                            No students on the list
                        </div>

                }

            </div>
        )
    }
}

export default App
