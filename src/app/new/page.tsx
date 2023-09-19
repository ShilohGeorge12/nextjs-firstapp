'use client';
import { TodoType } from '@/types';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewTodo() {
	const router = useRouter();
	const [title, settitle] = useState<string>('');
	const createTodo = async () => {
		await fetch('/api/todo', {
			method: 'POST',
			body: JSON.stringify({ title: title }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res: { todo: TodoType }) => {
				console.log(res);
				settitle('');
				router.push('/');
			})
			.catch((err: Error) => {
				console.log({ name: err.name, msg: err.message, cause: err.cause ?? '--cause--' });
			});
	};
	return (
		<form className='w-[70%] p-2 flex flex-col gap-4 items-center mx-auto'>
			<h2 className='text-4xl font-bold'>Create a New Todo</h2>
			<input
				type='text'
				name='title'
				value={title}
				onChange={(e) => settitle(e.target.value)}
				className='text-lg px-2 w-[80%] bg-transparent h-10 rounded-lg border-2 border-gray-400 hover:border-white outline-0 transition duration-500 ease-in-out hover:scale-105 focus:scale-105'
			/>
			<div className='flex items-center justify-between w-[80%]'>
				<Link
					href={'..'}
					className='p-2 text-lg rounded-xl border-2 border-gray-400 hover:border-white transition duration-500 ease-in-out hover:scale-105 font-semibold hover:bg-white hover:text-black'>
					Back To Home
				</Link>
				<button
					type='button'
					name={`Create a New Todo`}
					className={`p-2 text-lg rounded-xl border-2 border-gray-400 hover:border-white transition duration-500 ease-in-out hover:scale-105 font-semibold hover:bg-white hover:text-black`}
					onClick={createTodo}>
					Create a New Todo
				</button>
			</div>
		</form>
	);
}
