import { TodoItem } from '@/components/todoItem';
import { DB } from '@/db';
import { TodoType } from '@/types';
import Link from 'next/link';

export default async function Home() {
	const todos = (await DB.getTodoModel().find()) as TodoType[];
	return (
		<main className='w-full h-screen flex flex-col gap-4 items-center'>
			<h1 className='text-4xl'>Welcome To Next Js 13.4</h1>
			<ul className='list-none flex flex-col gap-2'>
				{todos.length > 0 &&
					todos.map((todo) => (
						<TodoItem
							_id={todo._id}
							title={todo.title}
							completed={todo.completed}
							createdAt={todo.createdAt}
						/>
					))}
			</ul>
			<Link
				href={'/new'}
				className='p-2 text-lg rounded-xl border-2 border-gray-400 hover:border-white transition duration-500 ease-in-out hover:scale-105 font-semibold hover:bg-white hover:text-black'>
				Create a New Todo
			</Link>
		</main>
	);
}
