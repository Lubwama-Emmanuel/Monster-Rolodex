import "./cardList.styles.css";

const Card = ({monsters}) => {
  return (
    <div className="cardList">
      {monsters.map((monster) => {
        const { name, id, email } = monster;
        return (
          <div class="cardContainer" key={id}>
            <img
              alt={name}
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
