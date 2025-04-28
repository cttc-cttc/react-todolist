import { useEffect, useState } from "react";
import OutlineInput from "./components/outline-input";
import PrimaryButton from "./components/primary-button";
import TextButton from "./components/text-button";
import ToDo from "./components/todo";

interface Todo {
  isComplete: boolean;
  value: string;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState<Todo[]>([]);

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // }

  const addTodo = (value: string) => {
    const newTodo: Todo = {
      isComplete: false,
      value,
    }
    setToDoList((currentList) => ([...currentList, newTodo]))
  }

  // const addToDo = () => {
  //   // toDoList의 현재 배열을 전개 구문을 사용해 새로운 배열로 만들고 끝에 신규 할 일을 추가해 상태 업데이트
  //   setToDoList((current) => [...current, { isComplete: false, value: inputValue }]);
  //   // toDoList 업데이트 이후 inputValue 빈 값으로 초기화
  //   setToDoList('');
  // }

  // const toggleComplete = (index: number) => {
  //   // 현재 toDoList를 map 함수를 사용해 토글할 toDo의 isComplete 값을 역전 시킴
  //   setToDoList((current) => current.map((toDo, toDoIndex) => {
  //     // 토글할 할 일의 index가 map 함수 순환 index와 같을때
  //     if (toDoIndex === index) {
  //       // toDo 객체를 깊은 복사하기 위해 newToDo를 Object.assign 함수로 생성
  //       const newToDo = Object.assign({}, toDo);
  //       // newToDo의 isComplete 값을 역전
  //       newToDo.isComplete = !newToDo.isComplete;
  //       return newToDo;
  //     } else {
  //       // 토글할 할 일의 index가 map 함수 순환 index와 다를때는 기존 toDo를 그대로 사용
  //       return toDo;
  //     }
  //   }));
  // };

  const toggleTodo = (index: number) => {
    setToDoList((currentList) => {
      const newList = [...currentList];
      newList[index].isComplete = !newList[index].isComplete;
      return newList;
    })
  }

  // ? DEBUG
  useEffect(() => {
    // console.log('todoList', toDoList);
  }, [toDoList]);



  const getUncompletedTodo = (list: Todo[]) => {
    return list.filter((todo) => !todo.isComplete);
  }

  const deleteAllCompletedTodo = () => {
    setToDoList((currentList) => (getUncompletedTodo(currentList)));
  }




  // 완료되지 않은 toDo만 찾는 filter 함수에 쓰일 '조건식 함수'
  // const isUncompletedToDo = toDo => !toDo.isComplete;

  // 완료되지 않은 toDo만 반환하는 함수
  // const getUncompletedToDoList = () => toDoList.filter(isUncompletedToDo);

  // 완료되지 않은 toDo만 toDoList로 업데이트하여 완료한 toDo는 제거
  // const removeAllCompletedToDo = () => {
  //   setToDoList((current) => current.filter(isUncompletedToDo))
  // }

  return (
    <div className="app">
      <h1 className="app-title">&#128466; To Do List</h1>

      <div className="app-form">
				{/* <OutlineInput />과 <PrimaryButton />를 추가할 곳 */}
        <OutlineInput
          placeholder="무엇을 해야 하나요?"
          value={inputValue}
          onChange={(v) => setInputValue(v)} />
        <PrimaryButton
          label="할 일 추가"
          onClick={() => addTodo(inputValue)}/>
      </div>

      <div className="app-list">
				{/* <ToDo />를 리스트 만큼 생성할 곳 */}
        {toDoList.map((toDo, index) =>
          <ToDo
            key={index}
            isComplete={toDo.isComplete}
            value={toDo.value}
            onClick={() => toggleTodo(index)}
            deleteAllCompletedTodo={deleteAllCompletedTodo} />
        )}
      </div>

      <div className='app-footer'>
				{/* 남은 일 개수와 <TextButton /> 추가할 곳 */}
        <p>남은 일: {getUncompletedTodo(toDoList).length}개</p>
        <TextButton
          label="완료 목록 삭제"
          onClick={() => deleteAllCompletedTodo()} />
      </div>
    </div>
  );
}

export default App
