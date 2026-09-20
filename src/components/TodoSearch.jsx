import {
  Search,
  ListSortDescending,
  Clock2,
  Check,
} from "lucide-react";

const TodoSearch = ({
  searchText,
  setSearchText,
  handleSearch,
  filterActive,
  setFilterActive,
}) => {
  const handleInputSearch = (e) => {
    const value = e.target.value;

    setSearchText(value);
    handleSearch(value);
  };

  return (
    <div className="search-container">
      <div className="left-search-sec">
        <Search
          size={20}
          color="var(--secondary)"
          strokeWidth={2}
        />

        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={handleInputSearch}
          aria-label="Search tasks"
        />
      </div>

      <div className="right-search-sec">
        <button
          type="button"
          className={`search-desc ${
            filterActive === "all" ? "active" : ""
          }`}
          onClick={() => setFilterActive("all")}
          aria-pressed={filterActive === "all"}
        >
          <ListSortDescending size={20}
            color="var(--text)"
            strokeWidth={2}
          />
          <span>All</span>
        </button>

        <button type="button"
          className={`search-desc ${
            filterActive === "active" ? "active" : ""
          }`}
          onClick={() => setFilterActive("active")}
          aria-pressed={filterActive === "active"}
        >
          <Clock2 size={20}
            color="var(--text)"
            strokeWidth={2} />
          <span>Active</span>
        </button>

        <button
          type="button"
          className={`search-desc ${
            filterActive === "completed" ? "active" : ""
          }`}
          onClick={() => setFilterActive("completed")}
          aria-pressed={filterActive === "completed"}
        >
          <Check
            size={20}
            color="var(--text)"
            strokeWidth={2}
          />
          <span>Completed</span>
        </button>
      </div>
    </div>
  );
};

export default TodoSearch;