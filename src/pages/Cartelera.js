import HomeMovies from "../components/HomeMovies/HomeMovies";

const Cartelera = () => {
    return (
      <>
        <section>
          <HomeMovies url={'https://api.themoviedb.org/3/movie/now_playing?api_key=1d1ffcbd926e19d7721125f17a8319dc'} title={"Cartelera"} limit={20}/>
        </section>
        
      </>
    );
  };
  
  export default Cartelera