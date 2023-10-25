import searchIcon from "../assets/images/search.svg";

export default function SearchBar (
  {
    filterUsers,
  } : {
    filterUsers: (query: string) => void,
  }
) {
  return (
    <div className="relative search-bar flex items-center ">
      <input type="text" id="user-search" className="ml-4 search-input outline-none" onChange={
        (event) => {
          filterUsers(event.target.value);
        }
      }/>
      <button className="absolute left-[1072px]">
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  )
}