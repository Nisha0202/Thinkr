import SearchForm from "../../component/SearchForm";

export default async function Home({searchParams}:{searchParams: Promise<{query?:string}>}) {

  const query = (await searchParams).query;

  return (
    <>
      <section className=" bg-custom">
        <div className="heading text-white">
        Your Startup <span className="text-primary">Ideas</span> <br />  Win Rewards
        </div>

        <SearchForm query= {query}/>
      </section>

    </>
  );
}
