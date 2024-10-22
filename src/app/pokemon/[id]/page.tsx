import PokeInfo from "@/components/pokeInfo";

interface PokeInfoPageProps {
    params: {
      id: string;
    };
  }

const PokeInfoPage = ({ params}: PokeInfoPageProps) => {
  return (
    <div>
      <PokeInfo id={params.id}/>
    </div>
  )
}

export default PokeInfoPage
