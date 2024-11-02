import SearchForm from "../../component/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  interface Author {
    id: number;
  }
  
  interface StartupCardType {
    _createdAt: string; // Date string indicating when the post was created
    views: number; // Number of views for the post
    author: Author; // Author object with an id property
    id: number; // Unique identifier for the post
    description: string; // Description of the post
    image: string; // URL of the image associated with the post
    category: string; // Category of the post
    title: string; // Title of the post
  }
  
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: {
        id: 11,
      },
      id: 1,
      description: "This is a description",
      image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxBfGVufDB8FHxBfA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: "Today",
      views: 42,
      author: {
        id: 12,
      },
      id: 2,
      description: "Exploring the future of robotics.",
      image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxBfGVufDB8FHxBfA%3D%3D",
      category: "Technology",
      title: "The Future of Tech",
    },
    {
      _createdAt: "2 days ago",
      views: 88,
      author: {
        id: 13,
      },
      id: 3,
      description: "A deep dive into AI advancements.",
      image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxBfGVufDB8FHxBfA%3D%3D",
      category: "AI",
      title: "Advancements in AI",
    },
    {
      _createdAt: "3 days ago",
      views: 75,
      author: {
        id: 14,
      },
      id: 4,
      description: "How robots are changing our lives.",
      image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxBfGVufDB8FHxBfA%3D%3D",
      category: "Lifestyle",
      title: "Robots in Daily Life",
    },
  ];
  
  // console.log(posts);
  
  return (
    <>
      {/* Hero */}
      <section className=" bg-custom">
        <div className="heading text-white">
          Your Startup <span className="text-primary">Ideas</span> <br />  Win Rewards
        </div>
        <SearchForm query={query} />
      </section>

      {/* Card */}
      <section>
        <div className="font-bold text-center my-8 sm:my-12 text-lg sm:text-2xl">{query ? `Search results for "${query}"` : "All Startup Ideas"}</div>
        <div className="card-grid">

          {posts.length > 0 && <>
            {posts.map((post : StartupCardType, index: number) => (
        <StartupCard key={index} {...post} />
      ))}
          </>}

        </div>

      </section>

    </>
  );
}
