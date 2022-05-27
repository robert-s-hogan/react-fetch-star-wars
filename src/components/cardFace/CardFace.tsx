interface Props {
  hairColor: string;
  eyeColor: string;
  // gender: string;
}

const CardFace: React.FC<Props> = (props) => {
  const { hairColor, eyeColor, gender } = props;
  return (
    <div className="container relative mx-auto mt-4 mb-8">
      <div
        className={`hair relative w-40 h-40 md:w-48 md:h-48 mx-auto bg-${hairColor} rounded-full rounded-tr-3xl`}
      >
        {/* <div
          className={`bangs relative w-32 h-16 md:w-48 md:h-48 mx-auto bg-black rounded-full rounded-b-3xl z-10`}
        ></div> */}
      </div>
      <div className="face top-4 right-24 md:right-20 lg:right-12 absolute w-40 h-40 md:w-48 md:h-48 bg-skin rounded-full">
        <div className="smile1 top-24 md:top-28 left-8 md:left-8 bg-white h-12 w-12 md:h-16 md:w-16 absolute rounded-bl-full"></div>
        <div className="smile2 top-24 md:top-28 left-20 md:left-24 bg-white h-12 w-12 md:h-16 md:w-16 absolute rounded-br-full"></div>
        <div
          className={`eye w-2 h-4 md:w-3 md:h-5 eye-left top-14 left-12 bg-${eyeColor} absolute rounded-md`}
        ></div>
        <div
          className={`eye w-2 h-4 md:w-3 md:h-5 eye-right top-14 right-12 bg-${eyeColor} absolute rounded-md`}
        ></div>
        <div className="ear rounded-full h-9 w-7 md:h-11 md:w-9 ear-left top-14 -left-4 absolute bg-skin -z-10"></div>
        <div className="ear rounded-full h-9 w-7 md:h-11 md:w-9 ear-right top-14 -right-4 absolute bg-skin"></div>
        <div
          className={`eyebrow-left h-2 w-5 md:h-2.5 md:w-7 top-10 left-8 absolute bg-${hairColor} rounded-md`}
        ></div>
        <div
          className={`eyebrow-right h-2 w-5 md:h-2.5 md:w-7 top-10 right-12 absolute bg-${hairColor} rounded-md`}
        ></div>
      </div>
    </div>
  );
};

export default CardFace;
