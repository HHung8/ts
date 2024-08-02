import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'

interface IPeoPle {
  name: string,
  age: number,
  address ?: string;
}

interface IRelationship {
  wifeName: string;
  childName: string;
}

enum Degree {
  ASSOCIATES,
  BACHELORS = 'BACHELORS',
  MASTERS = 'MASTERS',
  DOCTORATE = 'DOCTORATE',
}

interface Employee extends IPeoPle,IRelationship {
  jobTitle: string;
  degree: Degree;
  level ?: string | number | Degree
}

type ApiRespose<DataType> = {
  data: DataType
  status: 'success' | 'failure'
}

// type BookResponse = {
//   data: {id:number; bookName: string}
//   status: 'success' | 'failure'
// }

function App() {
  const [count, setCount] = useState<number>(0);
  const [people, setPeoPle] = useState<IPeoPle>()
  // function total (number1: number, number2: number):string {
  //   return String(number1 + number2);
  // }

  const userResponse:ApiRespose<{id:number, name: string}> = {
    data: {id:1, name: '毎日ITを勉強してる頑張りましょう'},
    status: 'success'
  }

  const bookResponse:ApiRespose<{id:number, bookName: string}> = {
    data: {id:1, bookName: 'Hữu Hưng asdasdsd'},
    status: 'failure'
  }
  console.log(userResponse)
  console.log(bookResponse)
  useEffect(() => {
    setPeoPle(
      {
        name: 'Hữu Hưng',
        age: 22,
        address: 'Ha Noij'
      }
    )
  },[])
  
  const employee : Employee = {
    name: 'Employee',
    age: 48,
    jobTitle: 'Software Engineer',
    degree: Degree.MASTERS,
    wifeName: 'グエンフーフン',
    childName: '勉強してる',
    level: 'ITを勉強してる頑張りましょう'
  };

  const employee2 : typeof employee = {
    name: 'employee2',
    age: 22,
    jobTitle: 'Web Developer',
    degree: Degree.DOCTORATE,
    wifeName: '茜教室',
    childName: 'ノビーた',
    level: '学校でセーターでITを勉強してる頑張りましょう'
  }
  console.log(people)
  console.log(employee)
  console.log('Employee2', employee2)
  function total(number1:number, number2:number): string {
    return String(number1 + number2);
  }  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count={count} setCount={setCount} total={total} />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
