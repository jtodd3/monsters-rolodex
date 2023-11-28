import './card-list.styles.css'
import Card from '../card/card';

export default function CardList({ monsters }) {
  return (
    <div className="card-list">
      {
        monsters.map((monster) => <Card monster={monster} />)
      }
    </div>
  )
}