import { favoriteCategories } from "data/favorite-categories";

function Playlists() {
	
	return (
		<nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
			<ul>
				{favoriteCategories.map((playlist) => (
					<li key={playlist.id}>
						<a href="#" className="text-md text-link hover:text-white flex h-10 p-4 items-center">
							{playlist.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
export default Playlists