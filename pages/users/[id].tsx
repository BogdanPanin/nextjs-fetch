import { GetServerSideProps } from "next";
import { Container, H1 } from "../../components";
import { IUser } from "../../models";

interface UserProps {
  user: IUser;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
};

export default function User({ user }: UserProps) {
  return (
    <Container keywords="Пользователь">
      <H1 title="Информация Пользователя"></H1>
      <div className="w-full p-4">
        <p>Имя пользователя - {user.name}</p>
        <p>Ник пользователя - {user.username}</p>
        <p>Email пользователя - {user.email}</p>
        <p>Номер пользователя - {user.phone}</p>
        <p>Компания пользователя - {user.company.name}</p>
        <p>
          Адресс пользователя - {user.address.city + ", " + user.address.street}
        </p>
        <p>Id пользователя - {user.id}</p>
      </div>
    </Container>
  );
}
