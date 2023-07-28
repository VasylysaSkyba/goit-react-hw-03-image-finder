import React, { Comment } from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Comment {
  state = {
    query: '',
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.setQueryFormSearchbar(this.state.query);
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={this.handleSubmitForm}>
        <button type="submit" className={styles.SearchForm__button}>
          <span className={styles.SearchForm__button__label}>Search</span>
        </button>

        <input
          className={styles.SearchForm__input}
          onChange={this.handleInputChange}
          name="search"
          value={this.state.query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>;
  }
}
