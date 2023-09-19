import { DB } from '@/db';
import { Todo } from '@/types';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: Response) => {
	const { title }: Partial<Pick<Todo, 'title'>> = await req.json();
	if (!title) {
		return NextResponse.json({ error: 'title must be present during creation on todo!.' }, { status: 400 });
	}
	console.log(title);
	const todo = await DB.getTodoModel().create({
		title,
		completed: false,
	});
	return NextResponse.json({ todo }, { status: 201 });
};
