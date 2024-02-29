import {useState} from 'react'
import {useFetch} from '../../services/fetch'
import {Album, Release} from '../release'
import {Loading} from '../loader'
import {Main, Select, Grid, Menu, Li} from './styles'
import {SpeedInsights} from '@vercel/speed-insights/react';

export const Root = () => {
  const {data, error, loading, refetch} = useFetch()
  const [release, setRelease] = useState(null)
  const [sortedData, setSortedData] = useState([])
  return (
    <>
      {release ? <Release setRelease={setRelease} children={release}/> :
        (loading ? <Loading/> :
            <Main>
              <Select>
                {sortedData[0] && sortedData[0] !== '~' ? <span>{sortedData[0]}</span> : <em>~</em>}
                <Menu>
                  <Li onClick={() => setSortedData(['~', data])}>~</Li>
                  <Li onClick={() => setSortedData(['aAsc', [...data].sort((a, b) => a.title.localeCompare(b.title))])}>aAsc</Li>
                  <Li onClick={() => setSortedData(['aDesc', [...data].sort((a, b) => b.title.localeCompare(a.title))])}>aDesc</Li>
                  <Li onClick={() => setSortedData(['nAsc', [...data].sort((a, b) => a.year - b.year)])}>nAsc</Li>
                  <Li onClick={() => setSortedData(['nDesc', [...data].sort((a, b) => b.year - a.year)])}>nDesc</Li>
                </Menu>
              </Select>
              <Grid>
                {(sortedData.length ? sortedData[1] : data).map((item, index) => <Album key={index} item={item} setRelease={setRelease}/>)}
              </Grid>
            </Main>
        )
      }
      <SpeedInsights/>
    </>
  )
}