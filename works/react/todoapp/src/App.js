import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";
import './App.css';
function App() {
  const [todos , setTodos] = useState ([
    {id:1, text: '리액트 기초 알아보기', checked: true},
    {id:2, text: '컴포넌트 스타일링 해보기', checked: false},
    {id:3, text: '일정관리 앱 만들어 보기', checked: true},
    {id:4, text: 'axios 활용해보기' , checked:false}
  ]);

  const nextId = useRef(5); 
  
  //항목 추가
  const onInsert = useCallback(
    text => { 
      const todo = {
        id: nextId.current,
        text,
        checked:false
      };
      setTodos(todos.concat(todo)); 
      nextId.current += 1;
    },[todos]);
  
  const onRemove = useCallback(
    id => {
      const opinion = prompt('정말로 삭제하시는건가요? (삭제를 원하시면 "네"를 입력하세요) ');
      if(opinion === '네') {
        setTodos(todos.filter(todos => todos.id !== id)); 
      }
      else {
        return false;
      }
    },[todos]);

  const onToggle = useCallback(
  id =>{
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, checked : !todo.checked} : todo
      ));
    
  },[todos]);

    const [selectedTodo, setSelectedTodo] = useState(null);
    const [insertToggle, setInsertToggle] = useState(false);

    const onInsertToggle = () => {
        if(selectedTodo) {
            setSelectedTodo(null);
        }
        setInsertToggle((prev => !prev));
    };

    const onChangeSelectedTodo = (todo) => {
        setSelectedTodo(todo);
    }

    const onUpdate = useCallback((id, text) => {
        onInsertToggle();
        const editTodos = todos.map(todo => todo.id === id ? {...todo, text} : todo);
        setTodos(editTodos);
    }, [onInsertToggle, todos]);

  
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />

      <TodoList 
                todos={todos} 
                onRemove={onRemove} 
                onToggle={onToggle} 
                onInsertToggle={onInsertToggle}
                onChangeSelectedTodo={onChangeSelectedTodo}
            />
            {
                insertToggle && <TodoEdit onUpdate={onUpdate} selectedTodo={selectedTodo} />
            }
    </TodoTemplate>
  );
}

export default App;
