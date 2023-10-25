import { User } from "./UserCard";
import closeImg from "../assets/images/close.svg"


export function ModalUserCard(
  { 
    user,
    handleClose,
  }: { 
    user: User
    handleClose: () => void,
}) {
  return (
    <div className="fixed top-[126px] left-[390px] p-[24px] rounded-[16px] flex flex-col gap-[40px] w-[500px] h-[468px] bg-white modal-shadow z-10 cursor-default" onClick={(event) => {event.stopPropagation();}}>
      <div className="flex justify-between items-center">
        <h2>
          {user.name}
        </h2>
        <button onClick={handleClose}>
          <img  src={closeImg} width={20} height={20} alt="close" />
        </button>
      </div>


      <div className="flex gap-[40px]">
        <div className="modal-columns">
          <p className="text-18-24">Телефон:</p>
          <p className="text-16-24">{user.phone}</p>

          <p className="text-18-24">Почта:</p>
          <p className="text-16-24">{user.email}</p>

          <p className="text-18-24">Дата приема:</p>
          <p className="text-16-24">{user.hire_date}</p>

          <p className="text-18-24">Должность:</p>
          <p className="text-16-24">{user.position_name}</p>

          <p className="text-18-24">Подразделение:</p>
          <p className="text-16-18">{user.department}</p>
        </div>
      </div>


      <div className="flex flex-col gap-[12px]">
          <p className="text-18-24">Дополнительная информация:</p>
          <p className="text-16-18">Разработчики используют текст в качестве заполнителя макета страницы. Разработчики используют текст в качестве заполнителя макета страницы.</p>
      </div>
    </div>
  );
}