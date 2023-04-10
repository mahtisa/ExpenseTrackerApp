
const Search = ({search,setSearchItem,searchItem}) => {
    
    const changeHandler = (e)=>{
        setSearchItem(e.target.value);
        search(e.target.value);
    }
    return ( 
        <div>
            <input onChange={changeHandler} type="text" placeholder="search..." value={searchItem}/>
        </div>
     );
}
 
export default Search;