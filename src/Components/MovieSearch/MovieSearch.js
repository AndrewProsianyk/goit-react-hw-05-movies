import {useState} from 'react'

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
        <form onSubmit={formSubmit}>
            <input
                type="text"
                placeholder="Search a movie"
                value={searchQuery}
                onChange={inputChange}
            />
            <button type='submit'>Search</button>
        </form>
    )
}

export default MovieSearch;