import { ReactNode } from "react";
import { MovieCard } from "./MovieCard";


interface ContentProps{
  movies: any;
  children: ReactNode;
}

export function Content({ movies, children}: ContentProps) {
  return (
    <div className="container">
      {children}
      <main>
        <div className="movies-list">
          {movies.map((movie: any) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
