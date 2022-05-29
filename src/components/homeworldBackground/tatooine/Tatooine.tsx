import { useState, useEffect } from 'react';

interface Props {
  homeworld: string;
  children: React.ReactNode;
}

const Tatooine: React.FC<Props> = (props) => {
  const { homeworld, children } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="bg-brown w-96 h-96">
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-brown">
        {homeworldName}
      </h3>
      <div className="row-one bg-tan absolute w-full h-16 top-0"></div>
      <div className="row-two bg-yellow absolute w-full h-16 top-14"></div>
      <div className="row-three bg-orange absolute w-full h-16 top-28"></div>
      <div className="row-four bg-orange-red absolute w-full h-16 top-44"></div>
      <div className="details">
        <div className="big-circle bg-orange-red absolute -left-8 top-24 w-36 h-36 rounded-full"></div>
        <div className="small-circle bg-orange-red absolute rounded-full top-36 left-36 w-20 h-20"></div>
        <div className="hut-circle absolute bg-brown rounded-full h-20 w-20 left-8 top-52"></div>
        <div className="hut-entrance absolute bg-brown h-6 w-6 top-56 left-24"></div>
      </div>
    </div>
  );
};

export default Tatooine;
