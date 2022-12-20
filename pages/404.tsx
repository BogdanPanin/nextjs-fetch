import { GetStaticProps } from "next";
import { Container } from "../components";

const Error = () => {
  return (
    <Container keywords="404 Error not faund">
      <main className="min-w-[100vh] min-h-[calc(100vh-65px)] bg-neutral-900 flex justify-center align-center flex-col">
        <h1 className="text-red-600 text-center text-9xl mb-4 ">ERORR 404</h1>
        <h1 className="text-white text-center text-5xl">Страница не найдена</h1>
      </main>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default Error;
