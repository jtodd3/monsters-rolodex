import './card.styles.css';

export default function Card({ monster: { id, name, email }}) {
  return (
    <div className="card-container" key={id}>
    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x190`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
  )
}