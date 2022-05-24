interface Props {
  name: string;
  eyeColor: string;
  updateEyeColor: (eyeColor: string) => string;
}

const CardTitle: React.FC<Props> = (props) => {
  const { name, eyeColor } = props;

  console.log(props);
  return (
    <h3
      className={`background-${eyeColor} card-title px-1 text-2xl lg:text-lg m-0 font-semibold border-b-3 whitespace-nowrap`}
    >
      {name}
    </h3>
  );
};

export default CardTitle;
