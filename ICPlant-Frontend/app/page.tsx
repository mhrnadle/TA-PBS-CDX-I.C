import { fetchplants } from "@utils";
import { HomeProps } from "@types";
import { Depth, LatinName, } from "@constants";
import { plantplantd, ShowMore, SearchBar, CustomFilter, Hero } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  const allPlant = await fetchplants({
    manufacturer: searchParams.manufacturer || "",
    Depth: searchParams.Depth || 31-35,
    LatinName: searchParams.LatinName|| "",
  });

  const isDataEmpty = !Array.isArray(allPlant) || allPlant.length < 1 || !allPlant;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Underwater Plants</h1>
          <p>Explore plants that have natural beauty</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='depth' options={Depth} />
            <CustomFilter title='LatinName' options={LatinName} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__plants-wrapper'>
              {allPlant?.map((plant) => (
                <plantplantd plant={plant} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allPlant.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allPlant?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
