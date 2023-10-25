import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"
import SearchBar from "./components/SearchBar";
import { User, UserCard } from "./components/UserCard";
import { ModalUserCard } from "./components/ModalUserCard";


const HOST = "localhost";

async function getUsersByPartialName(query: string) {
  const users = await axios.get(`http://${HOST}:3000/?term=${query}`);
  return users.data
}

function App() {
  const [ users, setUsers ] = useState<User[]>([]);
  const [ user, setUser ] = useState<User | null>(null);


  let modalJSX = <></>;
  if (user !== null) {
    modalJSX = (
      <div className="absolute bg-[#BCC3D080] inset-0 cursor-pointer" onClick={handleClose}>
        <ModalUserCard user={user} handleClose={handleClose} />
      </div>
    );
  } else {
    modalJSX = <></>
  }


  const userCards = users.map((user, i) => {
    return <UserCard key={i} user={user} handleUserCard={handleOpenUserCard} />
  })


  async function filterUsers(query: string) {
    const users = await getUsersByPartialName(query) 
    console.log(users);
    setUsers(users);
  }

  function handleOpenUserCard(user: User) {
    setUser(user);
  }

  function handleClose() {
    setUser(null);
    console.log("release")
  }
 
  useEffect(() => {
    axios.get(`http://${HOST}:3000`).then(r => {
      setUsers(r.data);
    });
  }, [])
  
  return (
    <div className="relative">
      <div className="main-container flex flex-col gap-8">
        <SearchBar filterUsers={filterUsers}/>
        <div className="grid grid-cols-3 gap-x-[25px] gap-y-[23px]">
          {userCards}
        </div>
      </div>
      {modalJSX}
    </div>
  )
}

export default App
