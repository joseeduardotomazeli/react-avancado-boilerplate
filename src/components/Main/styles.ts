import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  width: 100%;
  height: 100%;

  background-color: #06092b;
  color: #fff;
  text-align: center;
`;

export const Logo = styled.img`
  margin-bottom: 2rem;
  width: 25rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Hero = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
