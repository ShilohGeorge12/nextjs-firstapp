import { TodoType } from '@/types';

export function TodoItem({ _id, completed, createdAt, title }: TodoType) {
	return (
		<li className='flex gap-4 items-center justify-evenly'>
			<input
				type='checkbox'
				id={_id.toJSON()}
				value={`${completed}`}
				className='peer transition duration-500 ease-in-out cursor-pointer'
			/>
			<label className='peer-checked:text-gray-500 peer-checked:line-through text-base'>{title}</label>
			<span className='text-sm text-gray-400'>{createdAt.toLocaleString()}</span>
		</li>
	);
}
