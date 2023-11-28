import './search-box.styles.css';

export default function SearchBox({ onChange, className, placeholder }) {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
