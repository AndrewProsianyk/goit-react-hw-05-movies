const KEY = '0e40dad794763eb0d7353c3db2dc515b';
const URL = 'https://api.themoviedb.org/3'

fetch(`${URL}/trending/all/day?api_key=${KEY}`).then(result => console.log(result))




