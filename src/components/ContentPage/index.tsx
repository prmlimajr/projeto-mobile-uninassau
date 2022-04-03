import React from 'react'
import { Container, Content, Logo, Title } from './styles';

import ReactLogo from '../../assets/react-icon.png';

interface Props {
  logo?: boolean;
  title: string;
  contents: string[];
}

export function ContentPage({ logo, title, contents }: Props) {
  return (
    <Container>
      {logo && <Logo source={ReactLogo}  />}
      
      <Title>{title}</Title>

      {contents.map((content, index) => (
        <Content key={index}>{content}</Content>
      ))}      
    </Container>
  )
}
