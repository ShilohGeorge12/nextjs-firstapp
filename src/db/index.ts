// db.ts
import mongoose, { Connection, Model, Schema } from 'mongoose';
import { env } from '@/env';
import { Todo } from '@/types';

class Database {
	private static instance: Database;
	private connection!: Connection;
	private todoModel: Model<Todo>;

	private constructor() {
		this.connect();
		this.todoModel = this.createTodoModel();
	}

	private connect() {
		mongoose.set('strictQuery', false);
		this.connection = mongoose.createConnection(env.DATABASE_URL, {
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
			writeConcern: { w: 'majority' },
			retryWrites: true,
		});

		this.connection.on('error', (error) => {
			console.error('MongoDB connection error:', error);
		});

		this.connection.once('open', () => {
			console.log('Connected to MongoDB');
		});
	}

	private createTodoModel(): Model<Todo> {
		const todoSchema = new Schema<Todo>({
			title: {
				type: String,
				required: [true, 'title is required for a todo'],
			},
			completed: {
				type: Boolean,
				required: [true, 'completed is required for a todo'],
			},
			createdAt: {
				type: Date,
				default: () => new Date(),
			},
		});

		return this.connection.model<Todo>('todos', todoSchema);
	}

	public static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}

	public getTodoModel(): Model<Todo> {
		return this.todoModel;
	}
}

export const DB = Database.getInstance();
