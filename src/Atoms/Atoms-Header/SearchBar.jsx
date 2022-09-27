import '../../assets/css/css-header/searchbar.css'

function SearchBar() {
    return (
        <>
       <div class="buscar">
      <input type="text" placeholder="Buscar"/>

      <div class="btn">
        <i class="fas fa-search icon"></i>
      </div>
    </div>
        
        </>


      );
}

export default SearchBar;