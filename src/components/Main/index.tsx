import * as S from './styles';

export type MainProps = {
  title?: string;
  description?: string;
};

function Main(props: MainProps) {
  const {
    title = 'React Avançado',
    description = 'Boilerplate with NextJS, TypeScript and Styled Components',
  } = props;

  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Logo" />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.Hero src="/img/hero.svg" alt="Ilustração" />
    </S.Wrapper>
  );
}

export default Main;
