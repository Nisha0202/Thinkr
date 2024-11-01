import SearchForm from "../component/SearchForm";

export default function Home() {
  return (
    <>
      <section className=" bg-custom">
        <div className="heading text-white">
          Your Startup <span className="text-primary">Ideas</span> <br /> Our Community
        </div>

        <SearchForm/>
      </section>

    </>
  );
}
