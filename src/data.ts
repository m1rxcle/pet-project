export interface DataItem {
	id: number
	title: string
	description: string
}

const DATA: DataItem[] = [
	{
		id: 1,
		title: "Свечи зажигания",
		description: "1 раз в 36 мес. или 45000 км",
	},
	{
		id: 2,
		title: "Масло в двигателе",
		description: "1 раз в 12 мес или 10000 км",
	},
	{
		id: 3,
		title: "Колодки",
		description: "Нужно менять каждые 3 месяца или 20к километров",
	},
	{
		id: 4,
		title: "Масляный фильтр",
		description: "1 раз в 12 мес. или 10000 км",
	},
	{
		id: 5,
		title: "Тормозная жидкость",
		description: "1 раз в 36 мес. или 45000 км",
	},
	{
		id: 6,
		title: "Салонный фильтр",
		description: "1 раз в 24 мес. или 30000 км",
	},
	{
		id: 7,
		title: "Воздушный фильтр",
		description: "1 раз в 24 мес. или 30000 км",
	},

	{
		id: 10,
		title: "Охлаждающая жидкость двигателя",
		description: "1 раз в 60 мес. или 100000 км",
	},
	{
		id: 11,
		title: "Топливный фильтр",
		description: "1 раз в 72 мес. или 90000 км",
	},
	{
		id: 12,
		title: "Приводной ремень (и)",
		description: "1 раз в 48 мес. или 60000 км",
	},
	{
		id: 13,
		title: "Контроль/замена ремня/цепи ГРМ",
		description: "1 раз в 48 мес. или 60000 км",
	},
	{
		id: 14,
		title: "Масла АКПП",
		description: "1 раз в 48 мес. или 60000 км",
	},
]

export default DATA
