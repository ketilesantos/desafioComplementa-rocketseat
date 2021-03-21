import { Button } from "./Button";

interface SideBarProps{
  genres: any;
  onClick: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({genres, onClick, selectedGenreId} : SideBarProps ) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: any) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
