import React, { ReactElement } from 'react'
import { MoviesTable } from './MoviesTable'
import { TotalizerBox } from './TotalizerBox'
import movies from './movies.json'
import { Movie } from './movie'

export function Movies(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen min-h-screen h-full p-9">
      <div className="flex flex-col items-center h-full">
        <span className="text-4xl font-bold text-xiketic mb-10">
          Movies Wrap-Up 2022
        </span>
        <div className="h-32 grid grid-rows-1 grid-cols-3 gap-4 w-full">
          <TotalizerBox title="Total movies watched" total={100} />
          <TotalizerBox title="Total TV Shows watched" total={100} />
          <TotalizerBox title="Total hours watched" total={100} unit="hour" />
        </div>
        <div className="pt-8 w-full">
          <MoviesTable movies={movies.movies as Movie[]} />
        </div>
      </div>
    </div>
  )
}

// TODO:
// Total movies watched
// Total tv shows watched
// Total hours watched

// Best movies

// Series classification
// Movies classification
// Best horror movies

// Best movies overtime
