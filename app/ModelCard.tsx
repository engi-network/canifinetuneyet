import React from 'react'
import classNames from 'classnames'

const YesFineTune = () => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-[#65feb7]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  </div>
)

const NoFineTune = () => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-red-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" />
    </svg>
  </div>
)


const ModelCard = ({ tune, id, base }: Model) => (
  <div
    className={classNames({
        "group shadow rounded-lg px-5 py-4 transition-colors border-gray-300 bg-gray-500 dark:border-neutral-700 dark:bg-neutral-800/30": true,
        "shadow-red-500": !tune,
        "shadow-[#65feb7]": tune
        })}
  >
    <div className='flex items-center space-x-4'>
      {tune ? <YesFineTune /> : <NoFineTune />}
      <h2 className={`text-3xl font-semibold`}>
        {id}
      </h2>
    </div>

    {base !== id && (
      <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-3`}>
        Base Model:{' '}{base}
      </p>
    )}
  </div>
)

export default ModelCard
