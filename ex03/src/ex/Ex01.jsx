import { useState } from "react";

function App() {
    const [ student ] = useState([
        { id : 1, name : '김민수' },
        { id : 2, name : '이지우' },
        { id : 3, name : '박서준' }
    ]);
    
    return (
        <div>
            <h1>학생명단</h1>
            <ul>
                {student.map((student) => {
                    <li>{student.name}</li>
                })}
            </ul>
        </div>
    );
}

export default App;
// key 없이 배열 출력

``` 
key값 사용하도록 수정 :

function App() {
    const [students] = useState([
        { id: 1, name: '김민수' },
        { id: 2, name: '이지우' },
        { id: 3, name: '박서준' },
    ]);

    return (
        <div>
            <h1>학생 명단</h1>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li> -> key 값은 React가 배열로 출력된 각각의 JSX 요소를 구분하도록 돕는다.
                ))}
            </ul>
        </div>
    );
}

```

