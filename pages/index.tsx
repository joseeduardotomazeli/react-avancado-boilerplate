type HomeProps = {
  title: string;
};

function Home(props: HomeProps) {
  const { title = 'React Avançado' } = props;

  return <h1>{title}</h1>;
}

export default Home;
