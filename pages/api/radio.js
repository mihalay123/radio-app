import { radio_data } from '../../src/mock-data/mock-radio'
import { radioFilter } from '../../src/utilites/radio-filter'

let favorites = []

export default function get_radio(req, res) {
  if (req.method === 'POST') {
    const parsed = JSON.parse(req.body)
    favorites = parsed.favorites
    res.status(200).end()
    return
  }

  if (Object.keys(req.query).length === 0) {
    res.status(200).json({
      stations: radio_data,
      favorites: favorites,
    })
    return
  }

  const { location, genre, name } = req.query

  const filteredStations = radioFilter(radio_data, location, genre, name)
  const filteredFavourites = favorites
    ? radioFilter(favorites, location, genre, name)
    : []

  res.status(200).json({
    stations: filteredStations,
    favorites: filteredFavourites,
  })
}
