interface Props {
  homeworld: string;
}

const CardHomeworld: React.FC<Props> = (props) => {
  const { homeworld } = props;

  return (
    <p>
      <span className="text-sm badge bg-red text-white rounded py-1 px-2 ml-4 border-gray-400 mb-2">
        {homeworld}
      </span>
    </p>
  );
};

export default CardHomeworld;
