import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise <{query?: any}>
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      author: { _id: 1, name: 'Adrian' },
      description: "this is a description",
      image : "https://lejournal.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/adobestock_177359950_72dpi.jpg",
      category: "Robots",
      title: "We robots"
    }
  ]

  return (
    <main>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup connect with entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          { query ? `Search results for ${query}` : 'All Startups' }
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCartType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </main>
    
  );
}
