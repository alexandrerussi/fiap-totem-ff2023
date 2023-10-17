import Projetos from './components/projetos';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-0">
      <h1>PROJETO TAL</h1>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10">

          <Projetos/>

        </div>
      </div>


    </main>
  )
}
