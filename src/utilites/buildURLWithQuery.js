export const buildURLWithQuery = (location, genre, favorites) => {
  const url = new URL('http://localhost:3000/api/radio?')
  const query = new URLSearchParams()
  location && query.append('location', location)
  genre && query.append(`genre`, genre)

  return url + query
}
