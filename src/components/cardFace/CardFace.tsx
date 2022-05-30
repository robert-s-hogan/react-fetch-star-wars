interface Props {
  hairColor: string;
  eyeColor: string;
  // gender: string;
  skinColor: string;
  styles: string;
  fetchData: (url: string) => void;
}

const CardFace: React.FC<Props> = (props) => {
  const { hairColor, eyeColor, skinColor, styles } = props;

  return (
    <div className={styles}>
      <div
        className={`hair absolute top-2 right-32 w-40 h-40 mx-auto rounded-full rounded-tr-3xl bg-${hairColor} `}
      >
        {/* <div
          className={`bangs relative w-32 h-16 md:w-48 md:h-48 mx-auto bg-black rounded-full rounded-b-3xl z-10`}
        ></div> */}
      </div>
      <div
        className={`face top-4 right-32 absolute w-40 h-40 rounded-full bg-${skinColor}`}
      >
        <div className="smile1 top-24 left-8 bg-white h-12 w-12 absolute rounded-bl-full"></div>
        <div className="smile2 top-24 left-20 bg-white h-12 w-12 absolute rounded-br-full"></div>
        <div
          className={`eye w-2 h-4 md:w-3 md:h-5 eye-left top-14 left-12 absolute rounded-md bg-${eyeColor}`}
        ></div>
        <div
          className={`eye w-2 h-4 md:w-3 md:h-5 eye-right top-14 right-12 absolute rounded-md bg-${eyeColor}`}
        ></div>
        <div
          className={`ear rounded-full h-9 w-7 md:h-11 md:w-9 ear-left top-14 -left-4 absolute -z-10 bg-${skinColor}`}
        ></div>
        <div
          className={`ear rounded-full h-9 w-7 md:h-11 md:w-9 ear-right top-14 -right-4 absolute bg-${skinColor}`}
        ></div>
        <div
          className={`eyebrow-left h-2 w-5 md:h-2.5 md:w-7 top-10 left-8 absolute rounded-md bg-${hairColor}`}
        ></div>
        <div
          className={`eyebrow-right h-2 w-5 md:h-2.5 md:w-7 top-10 right-12 absolute bg-${hairColor} rounded-md`}
        ></div>
      </div>
    </div>
  );
};

export default CardFace;
