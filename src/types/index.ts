import { Types } from 'mongoose';

export interface ID {
	_id: Types.ObjectId;
}

export interface Todo {
	title: string;
	completed: boolean;
	createdAt: Date;
}

export interface TodoType extends ID, Todo {}
