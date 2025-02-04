import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
const TodoList = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<ul className='list-group'>
			{todos.map((todo, index) => (
				<TodoItem key ={index}  id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;