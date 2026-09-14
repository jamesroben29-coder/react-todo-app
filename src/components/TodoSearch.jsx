
import { Search, ListSortDescending, Clock2,Check } from 'lucide-react';


const TodoSearch = ({ searchText, setSearchText,
    handleFilterActive, handleFilterAll, handleFilterCompleted, filterActive }) => {

    const handleInputSearch = (e) => {
        setSearchText(e.target.value);
}

  return (
    <div className='search-container'>

        <div className='left-search-sec'>
            <Search size={20} color="var(--secondary)" strokeWidth={2} />
            <input type="text" placeholder='Search Tasks...' value={searchText} onChange={handleInputSearch}/>
        </div>

        <div className="right-search-sec" >
            <div className={`search-desc ${filterActive === "all" ? "active" : ""}`} onClick={handleFilterAll}>
                <ListSortDescending size={20} color="var(--text)" strokeWidth={2} />
                <span>All</span>
            </div>
            <div className={`search-desc ${filterActive === "active" ? "active" : ""}`} onClick={handleFilterActive}>
                <Clock2 size={20} color="var(--text)" strokeWidth={2} />
                <span >Active</span>
            </div>
            <div className={`search-desc ${filterActive === "completed" ? "active" : ""}`} onClick={handleFilterCompleted}>
                <Check size={20} color="var(--text)" strokeWidth={2} />
                <span>Completed</span>
            </div>
        </div>

    </div>
  )
}

export default TodoSearch;