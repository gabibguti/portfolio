import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
// import { MOVIES, YEAR } from './Movies'
import { Section } from './Section'
import { TVShowsTable } from './TVShowsTable'

export function AllTVShows(): ReactElement {
  const { year } = useParams()
  if (!year) {
    return <>Error</>
  }

  // const movies = MOVIES[year as YEAR]

  return (
    <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen min-h-screen h-full p-9">
      <div className="flex flex-col h-full">
        <Section title={`All TV shows watched ${year}`} />
        {/* <TVShowsTable TVShows={movies.tv_shows} /> */}
      </div>
    </div>
  )
}
