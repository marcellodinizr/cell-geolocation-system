interface NucleusOption {
	value: string;
	label: string;
}

export const nucleusOptions: NucleusOption[] = [
	{ value: `Igreja da Aliança Olho D'agua`, label: `Igreja da Aliança Olho D'agua` },
	{ value: `Igreja da Aliança Cidade Operária`, label: `Igreja da Aliança Cidade Operária` },
	{ value: `Igreja da Aliança Bomjardim`, label: `Igreja da Aliança Bomjardim` },
]

interface NetworkOption {
	value: string;
	label: string;
}

export const networkOptions: NetworkOption[] = [
	{ value: 'Adultos', label: 'Adultos' },
	{ value: 'Jovens (Revolution)', label: 'Jovens (Revolution)' },
	{ value: 'Adolescentes (Move)', label: 'Adolescentes (Move)' },
	{ value: 'Crianças (Kids)', label: 'Crianças (Kids)' },
]

interface WeekdayOption {
	value: string;
	label: string;
}

export const weekdayOptions: WeekdayOption[] = [
	{ value: 'Terça-feira', label: 'Terça-feira' },
	{ value: 'Quinta-feira', label: 'Quinta-feira' },
	{ value: 'Sexta', label: 'Sexta' },
	{ value: 'Sábado', label: 'Sábado' },
]

interface TimeOfDayOption {
	value: string;
	label: string;
}

export const timeOfDayOptions: TimeOfDayOption[] = [
	{ value: '17:00h', label: '17:00h' },
	{ value: '17:30h', label: '17:30h' },
	{ value: '18:00h', label: '18:00h' },
	{ value: '18:30h', label: '18:30h' },
	{ value: '19:00h', label: '19:00h' },
	{ value: '19:30h', label: '19:30h' },
	{ value: '20:00h', label: '20:00h' },
	{ value: '20:30h', label: '20:30h' },
]