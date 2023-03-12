export interface FormValues {
	id: number;
	name?: string;
	role?: string;
	skills: string[];
	lastUpdates?: string;
	preference?: string;
}

const today = new Date();

export const contactData: Array<FormValues> = [
	{
		id: 1,
		name: 'Taras Kravets',
		role: 'Dev',
		skills: ['JS', 'React', 'Next'],
		lastUpdates: `${today.getDate()}/${
			today.getMonth() + 1
		}/${today.getFullYear()}`,
		preference: 'Work from Home',
	},
	{
		id: 2,
		name: 'Rolland Boris',
		role: 'Dev',
		skills: ['JS'],
		lastUpdates: `${today.getDate()}/${
			today.getMonth() + 1
		}/${today.getFullYear()}`,
		preference: 'Work from Home',
	},
	{
		id: 3,
		name: 'Lena Golovach',
		role: 'Dev',
		skills: ['JS'],
		lastUpdates: `${today.getDate()}/${
			today.getMonth() + 1
		}/${today.getFullYear()}`,
		preference: 'Work from Home',
	},
];
