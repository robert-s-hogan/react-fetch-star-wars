interface Props {
  name: string;
}

const CardTitle: React.FC<Props> = (props) => {
  const { name } = props;

  return <h3 className="card-title">{name}</h3>;
};

export default CardTitle;
