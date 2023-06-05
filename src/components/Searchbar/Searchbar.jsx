import css from './Searchbar.module.css'


export const Searchbar = ({ onSubmit }) => {
  return (
  <header className={css.searchbar}>
    <form className={css.searchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.button}>
        <span className="button-label">Search</span>
      </button>
        <input
        name="search"
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
  )
}