import {Box, Btn, Code, handleRandomLightColor, Heading, Img, Paragraph, Section} from './styles.tsx';

export const Album = ({item, setRelease}) => {
  const formatMetadata = (obj, val) => {
    const key = Object.keys(obj).find(key => obj[key] === val);

    return (
      <span><strong>{key}</strong>: {val}</span>
    )
  }

  return (
    <>
      <Section>
        <Img onClick={() => setRelease(item)} src={item.thumb} alt={item.artist + ' - ' + item.title}/>
        <Box>
          <Heading>
            {formatMetadata(item, item.title)}
          </Heading>
          <Paragraph>
            {formatMetadata(item, item.artist)}
          </Paragraph>
          <Paragraph>
            {formatMetadata(item, item.catno)}
          </Paragraph>
          <Paragraph>
            {formatMetadata(item, item.year)}
          </Paragraph>
        </Box>
        <Btn onClick={() => setRelease(item)}>
          {'view >'}
        </Btn>
      </Section>
    </>
  )
}

export const Release = ({setRelease, children}) => {
  const items = Object.entries(children).sort().map(([k, v]) =>
    typeof v !== 'object' && v !== children.title ? <div key={k}><strong>{k}</strong>: {v}</div> : ''
  )
  const randomColor = handleRandomLightColor()

  return (
    <>
      <Box width={'360px'} borderBottom={'1px solid black'}>
        <Btn onClick={() => setRelease(null)} color={randomColor}>
          {'< back'}
        </Btn>
      </Box>
      <Code color={randomColor}>
        {items}
      </Code>
    </>
  )
}