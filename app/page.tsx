"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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

export default function Home() {
  const [models, setModels] = useState([])
  const [search, setSearch] = useState()
  const [fineTunableOnly, setFineTuneableOnly] = useState(false)

  useEffect(() => {
    fetch("/api")
    .then(response => response.json())
    .then(models => setModels(models))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Updated
          <code className="ml-2 font-mono font-bold">{(new Date()).toLocaleDateString()}</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://engi.network"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built with{' '}
            <Image
              src="/engi.svg"
              alt="Engi Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-200 after:via-green-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-green-900 after:dark:via-[#65feb7] after:dark:opacity-40 before:lg:h-[360px] mt-20 mb-10 text-center">
        <h1 className='text-6xl'>Can I <span className='font-extrabold'>fine-tune</span> yet?</h1>
      </div>

      <div className='flex'>
        <div>
          <label className='block text-gray-100 text-sm font-medium mb-2'>
            Search
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' onChange={e => setSearch(e.target.value)} />
        </div>

        <label>
          Fine-Tunable Only
          <input type='checkbox' onChange={e => setFineTuneableOnly(e.target.checked)}/>
        </label>
      </div>


      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
        {models
        .filter(({ id }) => search ? id.includes(search) : true)
        .filter(({ permission }) => fineTunableOnly ? permission[0].allow_fine_tuning : true)
        .map(({
          id,
          permission,
          root
          }) => (
            <div
              key={id}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 text-2xl font-semibold flex`}>
                <span className='mr-4'>
                  {permission[0].allow_fine_tuning ? <YesFineTune /> : <NoFineTune />}
                </span>
                {id}
              </h2>
              {root !== id && (
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Base Model:{' '}{root}
                </p>
              )}
            </div>
        ))}
      </div>

    </main>
  )
}
