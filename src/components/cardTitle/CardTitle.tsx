interface Props {
  name: string;
  eyeColor: string;
}

const CardTitle: React.FC<Props> = (props) => {
  const { name, eyeColor } = props;

  return <h3 className={`background-${eyeColor} card-title`}>{name}</h3>;
};

export default CardTitle;
