import { useState, useEffect } from 'react';

import CardTitle from '../cardTitle/CardTitle';
import CardFace from '../cardFace/CardFace';
import CardHomeworld from '../cardHomeworld/CardHomeworld';

interface Props {
  name: string;
  mass: number;
  height: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: number;
  homeworld: string;
  gender: string;
}

const Card: React.FC<Props> = (props) => {
  const {
    name,
    mass,
    height,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
  } = props;
  const [isShown, setIsShown] = useState(true);

  return (
    <div
      className="card rounded-lg relative"
      key={name}
      onMouseEnter={() => setIsShown(false)}
      onMouseLeave={() => setIsShown(true)}
    >
      <div className={isShown ? '' : 'opacity-70 scale-110 overflow-hidden'}>
        <CardFace
          hairColor={hair_color}
          eyeColor={eye_color}
          gender={gender}
          skinColor={skin_color}
        />
      </div>
      <CardTitle name={name} eyeColor={eye_color} />
      {!isShown && (
        <div
          className={
            !isShown
              ? 'absolute top-0 w-full transition ease-in-out delay-300 bg-white opacity-80 h-full'
              : ''
          }
        >
          <div className="card-inner h-full flex flex-col py-2">
            {/* <div className="text-xs flex justify-center p-1 text-black bg-yellow">
              <span className="mr-1 p-1 px-2 font-semibold">Mass: {mass}</span>
              <span className="mr-1 p-1 px-2 font-semibold border-l border-gray-400">
                Height: {height}
              </span>
              <span className="mr-1 p-1 px-2 font-semibold border-l border-gray-400">
                DOB: {birth_year}
              </span>
            </div> */}
            {/* <CardHomeworld homeworld={homeworld} /> */}
            <ul className="px-4">
              <li className="mx-0">Mass: {mass}</li>
              <li className="mx-0">Height: {height}</li>
              <li className="mx-0">DOB: {birth_year}</li>
              <li className="mx-0">Hair Color: {hair_color}</li>
              <li className="mx-0">Skin Color: {skin_color}</li>
              <li className="mx-0">Gender: {gender}</li>
              <li className="mx-0">Eye Color: {eye_color}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
