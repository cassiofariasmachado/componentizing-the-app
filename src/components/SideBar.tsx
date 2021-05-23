import { Genre } from '../models/genre';
import { Button } from './Button';

interface SideBarProps {
  genres: Genre[]
  handleChangeGenre?: (genre: Genre) => void;
  selectedGenge: Genre;
}

export function SideBar({ genres, handleChangeGenre, selectedGenge }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleChangeGenre && handleChangeGenre(genre)}
            selected={selectedGenge.id === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}