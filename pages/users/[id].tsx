import { useRouter } from "next/router";
import { Container, H1 } from "../../components";
import { useGetUsersQuery } from "../../store/user/user.api";

export default function User({ posts }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useGetUsersQuery(1);
  console.log(router);
  return (
    <Container keywords="Пользователь">
      <div className="w-full p-4">
        <H1 title="Информация Пользователя"></H1>
        <p>Имя пользователя - {data[id].name}</p>
        <p>Ник пользователя - {data[id].username}</p>
        <p>Email пользователя - {data[id].email}</p>
        <p>Номер пользователя - {data[id].phone}</p>
        <p>Компания пользователя - {data[id].company.name}</p>
        <p>
          Адресс пользователя -
          {data[id].address.city + ", " + data[id].address.street}
        </p>
        <p>Id пользователя - {data[id].id}</p> *
      </div>
    </Container>
  );
}
