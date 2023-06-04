export const Searchbar = ({onSubmit}) => {
  return (
  <header className="searchbar header-container">
    <form className="form search-form" onSubmit={onSubmit}>
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>
        <input
        name="search"
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
  )
}