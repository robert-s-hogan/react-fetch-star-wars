import { useState, useEffect } from 'react';
import Desert from './desert/Desert';
import Plains from './plains/Plains';
import Grasslands from './grasslands/Grasslands';

interface Props {
  homeworld: string;
  styles: string;
  planet: string;
}

const HomeworldBackground: React.FC<Props> = (props) => {
  const { homeworld, styles, planet } = props;

  const [homeworldName, setHomeworldName] = useState('');
  const [terrain, setTerrain] = useState('');

  async function fetchPlanetInfo(url) {
    const response = await fetch(url);
    const json = await response.json();
    const tempTerrain = json.terrain.split(', ');
    const firstTerrain = tempTerrain[0];
    setTerrain(firstTerrain);
    return json.name;
  }

  useEffect(() => {
    fetchPlanetInfo(planet);
    setHomeworldName(homeworld);
  }, [homeworld]);

  let findHomeworld = (terrain: string) => {
    try {
      switch (terrain) {
        case 'desert':
        case 'deserts':
          return <Desert homeworld={homeworldName} terrain={terrain} />;
        case 'grasslands':
          return <Grasslands homeworld={homeworldName} terrain={terrain} />;
        case 'plains':
        case 'mountains':
          return <Plains homeworld={homeworldName} terrain={terrain} />;
        default:
          return (
            <div
              className={`container absolute bottom-40 -right-24 mt-4 mb-8 z-10`}
            >
              {terrain}
            </div>
          );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <div className={styles}>{findHomeworld(terrain)}</div>;
};

export default HomeworldBackground;
