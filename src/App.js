import { useReducer, useState } from "react";
import "./App.css";
import Student from "./student";

function App() {
  const [name, setName] = useState("");
  const initialState = {
    count: 0,
    students: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        const name = action.payload.name;
        const newStudent = {
          id: Date.now(),
          name: name,
          isHere: true,
        };
        return {
          count: state.count + 1,
          students: [...state.students, newStudent],
        };
      case "remove":
        return {
          count: state.count - 1,
          students: state.students.filter(
            (student) => student.id !== action.payload.id
          ),
        };
      case "line":
        return {
          count: state.count,
          students: state.students.map((student) => {
            if (student.id === action.payload.id) {
              return { ...student, isHere: !student.isHere };
            }
            return student;
          }),
        };
      default:
        return state;
    }
  };
  const [studentsInfo, dispatch] = useReducer(reducer, initialState); // initialState는 초기값
  return (
    <div>
      <h1>출석부</h1>
      <p>현재 학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="학생 이름을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add", payload: { name } });
          setName("");
        }}
      >
        확인
      </button>
      {studentsInfo.students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          dispatch={dispatch}
          id={student.id}
          isHere={student.isHere}
        />
      ))}
    </div>
  );
}

export default App;
