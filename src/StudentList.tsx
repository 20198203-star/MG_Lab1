type registeredStudents = {
    students: string[];
    };

const StudentList = ({students}: registeredStudents) => {
    return (
      <>
        <ul>
            {students.map((students, index) => (
                <li key = {index}>{students}</li>
            ))}
        </ul>
      </>
    )
  }
  
  export default StudentList