import Authenticated from "@/Layouts/Authenticated/index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickityOptions ={
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }

    return <Authenticated>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            <title>Dashboard</title>
        </Head>
         <div>
            <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOptions}>

                    {/* Movie Thumbnail */}
                    {[1,2,3,4].map(i => (
                        <FeaturedMovie key={i} slug={"Batman in Love"} name={`Batman in Love ${i}`} category={"Comedy"} thumbnail={"/images/featured-1.png"} rating={i + 1}/>
                    ))}
                </Flickity>
        </div>
        <div className="mt-8">
            <div class="font-semibold text-[22px] text-black mb-4">Browse</div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1,2,3,4,5,6].map(i => (
                        <MovieCard key={i} slug={"Batman in Love"} name={`Batman in Love ${i}`} category={"Comedy"} thumbnail={"/images/browse-1.png"}/>
                    ))}
                    
                </Flickity>
        </div>
    </Authenticated>
}