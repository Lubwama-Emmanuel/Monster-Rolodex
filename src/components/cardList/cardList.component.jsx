import "./cardList.styles.css";
import Card from "./card.component";

const CardList = ({ monsters }) => (
  // <div className="cardList">
  <Card monsters={monsters} />
  // </div>
);

export default CardList;
