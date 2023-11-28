import './search-box.styles.css';

export default function SearchBox({ value, onChange, className, placeholder }) {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
