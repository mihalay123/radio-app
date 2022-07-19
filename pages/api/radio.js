import { radio_data } from '../../src/mock-data/mock-radio'
import { radioFilter } from '../../src/utilites/radio-filter'

export default function get_radio(req, res) {
  if (Object.keys(req.query).length === 0) {
    res.status(200).json({
      stations: radio_data,
      favourites: [],
    })
    return
  }

  const { location, genre, name, favourites = null } = req.query

  const filteredStations = radioFilter(radio_data, location, genre, name)
  const filteredFavourites = favourites
    ? radioFilter(radio_data, location, genre, name)
    : []

  res.status(200).json({
    stations: filteredStations,
    favourites: filteredFavourites,
  })
}
