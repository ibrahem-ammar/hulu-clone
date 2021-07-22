import Thumbnail from "./Thumbnail";

export default function Results({ results }) {
    return (
        <div className="my-10 px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {
                results.map( movie => (
                    <Thumbnail key={movie.id} movie={movie}/>
                ))
            }
        </div>
    )
}
