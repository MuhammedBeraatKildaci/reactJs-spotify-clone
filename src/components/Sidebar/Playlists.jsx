function Playlists() {
	const playlists = [
		{ id: 1, name: "Çalma Listem #1" },
		{ id: 2, name: "Çalma Listem #2" },
		{ id: 3, name: "Çalma Listem #3" },
		{ id: 4, name: "Çalma Listem #4" },
		{ id: 5, name: "Çalma Listem #5" },
		{ id: 6, name: "Çalma Listem #6" },
		{ id: 7, name: "Çalma Listem #7" },
		{ id: 8, name: "Çalma Listem #8" },
		{ id: 9, name: "Çalma Listem #9" },
		{ id: 10, name: "Çalma Listem #10" },
		{ id: 11, name: "Çalma Listem #11" },
		{ id: 12, name: "Çalma Listem #12" },
		{ id: 13, name: "Çalma Listem #13" },
		{ id: 14, name: "Çalma Listem #14" },
		{ id: 15, name: "Çalma Listem #15" },
		{ id: 16, name: "Çalma Listem #16" },
		{ id: 17, name: "Çalma Listem #17" },
		{ id: 18, name: "Çalma Listem #18" },
		{ id: 19, name: "Çalma Listem #19" },
		{ id: 20, name: "Çalma Listem #20" },
		{ id: 21, name: "Çalma Listem #21" },
		{ id: 22, name: "Çalma Listem #22" },
		{ id: 23, name: "Çalma Listem #23" },
		{ id: 24, name: "Çalma Listem #24" },
		{ id: 25, name: "Çalma Listem #25" },
		{ id: 26, name: "Çalma Listem #26" },
		{ id: 27, name: "Çalma Listem #27" },
		{ id: 28, name: "Çalma Listem #28" },
		{ id: 29, name: "Çalma Listem #29" },
		{ id: 30, name: "Çalma Listem #30" },
		{ id: 31, name: "Çalma Listem #31" },
		{ id: 32, name: "Çalma Listem #32" },
		{ id: 33, name: "Çalma Listem #33" },
		{ id: 34, name: "Çalma Listem #34" },
		{ id: 35, name: "Çalma Listem #35" },
		{ id: 36, name: "Çalma Listem #36" },
		{ id: 37, name: "Çalma Listem #37" },
		{ id: 38, name: "Çalma Listem #38" },
		{ id: 39, name: "Çalma Listem #39" },
		{ id: 40, name: "Çalma Listem #40" },
	]
	return (
		<nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
			<ul>
				{playlists.map((playlist) => (
					<li key={playlist.id}>
						<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
							{playlist.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
export default Playlists