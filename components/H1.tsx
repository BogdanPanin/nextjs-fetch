interface H1Porps {
  title: string;
}
const H1 = ({ title }: H1Porps) => {
  return (
    <>
      <h1 className="text-2xl mt-2 text-center">{title}</h1>
    </>
  );
};

export default H1;
