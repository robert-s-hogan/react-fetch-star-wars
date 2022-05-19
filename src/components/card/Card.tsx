// interface CardProps {
//     name: string,
//     mass: number,
//     height: number,
//     hair_color: string,
//     skin_color: string,
//     eye_color: string,
//     birth_year: number,
//     gender: string,
// }

// const Card: React.FC = ({data: ReactNode}) => {
    
//     return (
//         <div>
//             {data.map((character) => (
//                 <div
//                     className="card"
//                     title={character.name}
//                     key={character.name}
//                 >
//                     <div className="card-inner">
//                         <h3 className="card-title">{character.name}</h3>
//                         <ul>
//                         <li>Mass: {character.mass}</li>
//                         <li>Height: {character.height}</li>
//                         <li>Hair Color: {character.hair_color}</li>
//                         <li>Skin Color: {character.skin_color}</li>
//                         <li>Eye Color: {character.eye_color}</li>
//                         <li>Birth Year: {character.birth_year}</li>
//                         <li>Gender: {character.gender}</li>
//                         </ul>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }