export function radioFilter(
  data = [],
  location = null,
  genre = null,
  name = null
) {
  let result = data

  result = location
    ? result.filter((station) => station.location === location)
    : result

  result = genre ? result.filter((station) => station.genre === genre) : result

  result = name
    ? result.filter((station) =>
        station.name.toLowerCase().includes(name.toLowerCase())
      )
    : result

  return result
}
