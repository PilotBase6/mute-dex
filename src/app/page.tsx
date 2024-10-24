import SearchButton from "@/components/buttons/searchButton";
import CardList from "@/components/cards/cardList";

export default async function Home({searchParams}: {searchParams: { [key: string]: string | undefined }}) {
  const limit = searchParams['limit']?? 20;
  const search = searchParams['search']?? '';
  const limitPage = Number(limit);
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-[0rem,5rem,5rem,5rem] font-[family-name:var(--font-geist-sans)]">
      <main className="container flex flex-col justify-center gap-12 row-start-2 items-center">
        <SearchButton/>
        <CardList limit={limitPage} search={search} />
      </main>
    </div>
  );
}
