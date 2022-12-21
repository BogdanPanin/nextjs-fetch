import { A, Container, H1 } from "../components";
import { useGetUsersQuery } from "../store/user/user.api";

function users() {
  const { data, isLoading, error } = useGetUsersQuery(1);
  return (
    <Container keywords="users react js ">
      <div className="w-full p-4">
        <H1 title="Список Пользователей"></H1>
        <ul>
          {isLoading ? (
            <p>Загрузка...</p>
          ) : error ? (
            <p>У вас ошибка</p>
          ) : (
            data?.map((users) => (
              <li key={users.id} className="w-full h-[20px] mt-2">
                <A
                  href={`users/${users.id}`}
                  text={users.name}
                  className="hover:text-[#000000]/50"
                ></A>
              </li>
            ))
          )}
        </ul>
      </div>
    </Container>
  );
}

export default users;
