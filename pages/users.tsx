import { GetServerSideProps } from "next";
import { A, Container, H1 } from "../components/";
import { IUser } from "../models";

interface UsersProps {
  users: IUser[];
}

function users({ users }: UsersProps) {
  return (
    <Container keywords="users react js ">
      <div className="w-full p-4">
        <H1 title="Список Пользователей"></H1>
        <ul>
          {users?.map((users) => (
            <li key={users.id} className="w-full h-[20px] mt-2">
              <A
                href={`users/${users.id}`}
                text={users.name}
                className="hover:text-[#000000]/50"
              ></A>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default users;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return {
      props: { users },
    };
  } catch (error) {
    console.log(error);
  }
};
