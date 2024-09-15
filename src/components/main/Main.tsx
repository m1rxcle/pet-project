import "./style.css"
import DATA, { DataItem } from "../../data"
import React, { useState } from "react"

const Main: React.FC = () => {
	const activeDescription = "search-description--active"
	const nonDescription = "search-description"

	const [isActive, setActive] = useState<boolean>(false)
	const [searchTerm, setSearchTerm] = useState<string>("")

	const filteredData: DataItem[] = DATA.filter((data: DataItem) =>
		data.title.toLowerCase().includes(searchTerm.toLowerCase())
	)

	function handleClick() {
		setActive(!isActive)
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchTerm(e.target.value)
	}

	return (
		<main className="main-container">
			<h1 className="main-title">Поиск по регламенту</h1>
			<div className="search">
				<input
					className="search-input"
					placeholder="Начните искать..."
					value={searchTerm}
					onChange={handleInputChange}
				/>
				<button
					disabled={searchTerm.length <= 0}
					onClick={handleClick}
					className="searchBtn"
				>
					Поиск
				</button>
				{filteredData.map((data: DataItem) => {
					return (
						<div
							key={data.id}
							className={
								isActive && searchTerm.length > 0
									? activeDescription
									: nonDescription
							}
						>
							<h2 className="description-title">{data.title}</h2>
							<hr style={{ width: "75%" }} />
							<p className="description-pretitle">{data.description}</p>
						</div>
					)
				})}
				{filteredData.length === 0 && (
					<div className={isActive ? activeDescription : nonDescription}>
						<h2 className="description-title">Ничего не найдено</h2>
					</div>
				)}
			</div>
		</main>
	)
}

export default Main
