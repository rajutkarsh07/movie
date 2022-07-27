import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

{
  /* <div className="movie">
    <div>
      <p>{movie1.Year}</p>
    </div>
    <div>
      <img
        src={
          movie1.Poster !== "N/A"
            ? movie1.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie1.Title}
      />
    </div>
    <div>
      <span>{movie1.Type}</span>
      <h3>{movie1.Title}</h3>
    </div>
  </div> */
}

// <div className="movie">
//       <div>
//         <p>{props.Year}</p>
//       </div>
//       <div>
//         <img
//           src={
//             props.Poster !== "N/A"
//               ? props.Poster
//               : "https://via.placeholder.com/400"
//           }
//           alt={props.Title}
//         />
//       </div>
//       <div>
//         <span>{props.Type}</span>
//         <h3>{props.Title}</h3>
//       </div>
//     </div>
