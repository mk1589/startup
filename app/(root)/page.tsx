import SearchForm from "@/components/SearchForm";
import StartupCard ,{StartupTypeCard}from "@/components/StartupCard"

import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STRATUPS_QUERY } from "@/sanity/lib/queries";

import {auth} from "@/auth"

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string}>
}) {
      const query = (await searchParams).query;
      const params = { search: query || null}

      // const session = await auth();
      // console.log(session?.id);

      // const posts = await client.fetch(STRATUPS_QUERY);
      const { data: posts} =  await sanityFetch({query: STRATUPS_QUERY, params})

      


      // const posts = [{
      //   _createdAt: new Date(),
      //   views: 55,
      //   author: { _id: 1, name: 'Manish'},
      //   _id: 1,
      //   description: "This is a description",
      //   image:"https://www.maginative.com/content/images/size/w1200/format/avif/2024/02/Figure-AI.jpg",
      //   category: "Robots",
      //   title: "we Robots",
      //  },
      // ];
  return (
    <>
    <section className="white_container">
      <h1 className="heading ">Pitch Your Startup, <br/> Connect With 
      Entrepreneurs</h1>
      <p className="sub-heading">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>

          <SearchForm  query={query}/>
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : 'All Startups'}
      </p>

      <ul className="mt-7 card_grid">
        {posts?.length > 0 ?(
          posts.map((post: StartupTypeCard, index: number) => (
            <StartupCard key={post?._id} post={post}/>
          ))
        ) : (
          <p className="no-results">No startups found</p>
        )}

      </ul>

    </section>

    <SanityLive />
      
    </>
  );
}