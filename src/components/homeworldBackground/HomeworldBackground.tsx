import { useState, useEffect } from 'react';
import Tatooine from './tatooine/Tatooine';

interface Props {
  homeworld: string;
  styles: string;
}

const HomeworldBackground: React.FC<Props> = (props) => {
  const { homeworld, styles } = props;
  const [homeworldName, setHomeworldName] = useState('');

  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  let findHomeworld = (homeworld: string) => {
    try {
      switch (homeworldName) {
        case 'Tatooine':
          return <Tatooine homeworld={homeworldName} />;
        default:
          return (
            <>
              <div
                className={`container absolute bottom-40 -right-24 mt-4 mb-8 z-10`}
              >
                {homeworldName}
              </div>
            </>
          );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <div className={styles}>{findHomeworld(homeworldName)}</div>;
};

export default HomeworldBackground;
