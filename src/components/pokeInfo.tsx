import { fetchPokeInfo } from "@/lib/fetchPokeAPI";
import { pokeTypes } from "@/lib/pokeType";
import ErrorAlert from "./alert/errorAlert";

const PokeInfo = async ({ id }: { id: string }) => {
  try {
    const data = await fetchPokeInfo(id);

    if(data?.error) {
      return (
        <div className="container mx-auto p-8 lg:p-16 pt-10">
          <ErrorAlert message="La información de este Pokémon no está disponible en este momento. Por favor, intenta con otro Pokémon." />
        </div>
      );
    }

    return (
      <div className="container mx-auto p-8 lg:p-16 pt-10">
        <div
          key={id}
          className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12 p-8 border-2  rounded-xl  shadow-2xl"
        >
          <div className="relative w-full lg:w-4/5 flex justify-center lg:justify-end place-self-center ">
            <img
              src={data.image}
              alt={data.name}
              className="w-60 h-60 lg:w-80 lg:h-80 object-contain rounded-full bg-white p-4 shadow-md "
            />
          </div>

          <div className="bg-white border-2 rounded-xl p-6 lg:p-8 text-center lg:text-left shadow-md">
            <h1 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold capitalize mb-6 text-gray-800">
              {data.name}
            </h1>

            <div className="grid grid-cols-2 gap-6 text-[clamp(1rem,1.5vw,1.25rem)] text-gray-700 capitalize">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-semibold text-blue-600">Type</span>
                <div className="flex gap-2 flex-wrap">
                  {data.types.map((type: string) => {
                    const pokeTypeColor = pokeTypes[type];
                    return (
                      <span
                        key={type}
                        style={{ backgroundColor: pokeTypeColor }}
                        className={` text-center px-4 py-1 rounded-md text-white`}
                      >
                        {type}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <span className="font-semibold text-blue-600">Height</span>
                <span>{data.height}</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <span className="font-semibold text-blue-600">Weight</span>
                <span>{data.weight}</span>
              </div>

              <div className="flex flex-col items-center lg:items-start capitalize">
                <span className="font-semibold text-blue-600">Ability</span>
                <span>{data.abilities.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return (
      <div className="container mx-auto p-8 lg:p-16 pt-10">
        <ErrorAlert message="¡Oh no! Algo salió mal al obtener la información del Pokémon. Por favor, inténtelo de nuevo más tarde." />
      </div>
    );
  }
};

export default PokeInfo;
