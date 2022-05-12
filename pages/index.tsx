import type { NextPage, GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home: NextPage<{
  text: string
}> = (props) => {
  console.log(props)
  return (
    <div className={styles.container}>
      <ReactMarkdown>{props.text}</ReactMarkdown>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {data} = await axios.get('https://raw.githubusercontent.com/facebook/react/main/CHANGELOG.md')
  if(typeof data !== 'string') {
    return {
      notFound: true
    }
  }
  return { props: { text: data } };
}

export default Home
