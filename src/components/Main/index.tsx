import * as S from './styles';

function Main() {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Logo" />

      <S.Title>React Avançado</S.Title>
      <S.Description>
        Boilerplate with NextJS, TypeScript and Styled Components
      </S.Description>

      <S.Hero src="/img/hero.svg" alt="Ilustração" />
    </S.Wrapper>
  );
}

export default Main;
