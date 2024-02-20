import {Wrapper, Heading, Spinner} from './styles.tsx'

export const Loading = () => {
  return (
    <Wrapper>
      <Heading>
        <Spinner>🌀</Spinner>
      </Heading>
    </Wrapper>
  )
}