function Student (props) {
    const student = props.data;

    const finalGrade = () => {
        return student.exam * 0.5 + student.homework * 0.5;
    }

    const colorByGrade = () => {
        if (finalGrade() > 90) {
            return "green";
        } else if (finalGrade() < 60) {
            return "red";
        } else {
            return "black"
        }
    }

    return (
        <div style={{
            color: colorByGrade()
        }}>
            <div>
                Name: {student.name}
            </div>
            <div>
                Exam: {student.exam}
            </div>
            <div>
                HW: {student.homework}
            </div>
            <div>
                Final Grade: {finalGrade()}
            </div>
        </div>
    )
}

export default Student;