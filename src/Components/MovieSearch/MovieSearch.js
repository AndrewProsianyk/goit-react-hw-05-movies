import { useState } from 'react';
import styles from './MovieSearch.module.css'

function MovieSearch({onSubmit}) {
    const [searchQuery, setSearchQuery] = useState('')
    const inputChange = e => {
        setSearchQuery(e.currentTarget.value)
    }

    const formSubmit = e => {
        e.preventDefault()
        if (searchQuery.trim() === '') {
            alert('Write something');
            return;
        } 
        onSubmit(searchQuery);
        setSearchQuery('');
    }

    return(
        <form
            className={styles.searchForm}
            onSubmit={formSubmit}>
            <input
                className={styles.formInput}
                type="text"
                placeholder="Search a movie"
                value={searchQuery}
                onChange={inputChange}
            />
            <button
                className={styles.formButton}
                type='submit'>GO</button>
        </form>
    )
}

export default MovieSearch;