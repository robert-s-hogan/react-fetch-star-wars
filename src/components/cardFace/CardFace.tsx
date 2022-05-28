interface Props {
  hairColor: string;
  eyeColor: string;
  // gender: string;
  skinColor: string;
}

const CardFace: React.FC<Props> = (props) => {
  const { hairColor, eyeColor, skinColor } = props;
  return (
    <div className="container relative mx-auto my-8">
      <div
        className={`hair relative w-40 h-40 md:w-48 md:h-48 xl:w-40 xl:h-40 mx-auto bg-${hairColor} rounded-full rounded-tr-3xl`}
      >
        {/* <div
          className={`bangs relative w-32 h-16 md:w-48 md:h-48 mx-auto bg-black rounded-full rounded-b-3xl z-10`}
        ></div> */}
      </div>
      <div
        className={`face top-4 right-24 md:right-20 lg:right-12 xl:right-8 absolute w-40 h-40 md:w-48 md:h-48 xl:w-40 xl:h-40 bg-${skinColor} rounded-full`}
      >
        <div className="smile1 top-24 md:top-28 xl:top-24 left-8 xl:left-6 bg-white border-grey border-t-1 border-b-1 h-12 w-12 md:h-16 md:w-16 xl:w-14 xl:h-14 absolute rounded-bl-full"></div>
        <div className="smile2 top-24 md:top-28 xl:top-24 left-20 md:left-24 xl:left-20 bg-white border-grey border-t-1 border-b-1 h-12 w-12 md:h-16 md:w-16 xl:w-14 xl:h-14 absolute rounded-br-full"></div>
        <div
          className={`eye w-2 h-4 md:w-3 md:h-5 border-grey border-1 eye-left top-14 left-12 bg-${eyeColor} absolute rounded-md`}
        ></div>
        <div
          className={`eye w-2 h-4 md:w-3 md:h-5 border-grey border-1 eye-right top-14 right-12 bg-${eyeColor} absolute rounded-md`}
        ></div>
        <div
          className={`ear rounded-full h-9 w-7 md:h-11 md:w-9 ear-left top-14 -left-4 absolute bg-${skinColor} -z-10`}
        ></div>
        <div
          className={`ear rounded-full h-9 w-7 md:h-11 md:w-9 ear-right top-14 -right-4 absolute bg-${skinColor} -z-10`}
        ></div>
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
