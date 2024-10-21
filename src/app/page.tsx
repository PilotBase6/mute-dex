import CardList from "@/components/cards/cardList";

export default async function Home({searchParams}: {searchParams: { [key: string]: string | undefined }}) {
  const limit = searchParams['limit']?? 20;
  const search = searchParams['search']?? '';
  const limitPage = Number(limit);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-[0rem,5rem,5rem,5rem] font-[family-name:var(--font-geist-sans)]">
      <main className="container flex flex-col justify-center gap-12 row-start-2 items-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
          MUTA PokeDex
        </h1>
        <CardList limit={limitPage} search={search} />
      </main>
    </div>
  );
}
