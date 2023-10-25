import "./userCard.css"
import phoneImg from "../assets/images/phone.svg";
import mailImg from "../assets/images/mail.svg";

export interface User {
  name: string,
  phone: string,
  email: string,
  address: string,
  position_name: string,
  department: string,
  hire_date: string,
}

export function isUser(value: any): value is User {
  const tmpValue: User = value;
  return ( 
    typeof tmpValue.name === "string" &&
    typeof tmpValue.phone === "string" &&
    typeof tmpValue.email === "string" &&
    typeof tmpValue.address === "string" &&
    typeof tmpValue.position_name === "string" &&
    typeof tmpValue.department === "string" &&
    typeof tmpValue.hire_date === "string" 
  );
}

export function UserCard(
  { 
    user,
    handleUserCard,
  }: {
    user: User,
    handleUserCard: (user: User) => void,
  }) {
    
  return (
    <div className="user-card text-left flex flex-col gap-[24px] h-[313px]" onClick={() => handleUserCard(user)}>
      <h2>{user.name}</h2>
      <div className="h-[23px] w-[162px] flex flex-col gap-[12px]">
        <div className="flex flex-row items-center gap-x-[14px]">
          <img src={phoneImg} className="px-[5px]" alt="phone" />
          <p className="text-14">{user.phone}</p>
        </div>
        <div className="flex flex-row items-center gap-x-[14px]">
          <img src={mailImg} alt="email" />
          <p className="text-14">{user.email}</p>
        </div>
      </div>
    </div>
  )
}