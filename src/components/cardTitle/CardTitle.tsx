import { useState, useEffect } from 'react';

interface Props {
  name: string;
  eyeColor: string;
  updateEyeColor: (eyeColor: string) => string;
}

const CardTitle: React.FC<Props> = (props) => {
  const { name, eyeColor } = props;

  const [bg, setBg] = useState('');

  useEffect(() => {
    cleanEyeColor(eyeColor);
  }, [bg]);

  const cleanEyeColor = (eyeColor: string) => {
    let eye = eyeColor.replace(/s/g, ' ');
    let arr = eye.split(' ');
    let newArr = [];
    newArr = arr.map((word) => {
      let style = `background-${eye} card-title`;
      setBg(style);
    });
    return newArr;
  };

  return <h3 className={bg}>{name}</h3>;
};

export default CardTitle;
