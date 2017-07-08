import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/ch1'><a>Chapter 1</a></Link> |
        <Link href='/ch2'><a>Chapter 2</a></Link> |
        <Link href='/ch3'><a>Chapter 3</a></Link> |
        <Link href='/ch4'><a>Chapter 4</a></Link> |
        <Link href='/ch5'><a>Chapter 5</a></Link> |
        <Link href='/ch6'><a>Chapter 6</a></Link> |
        <Link href='/ch7'><a>Chapter 7</a></Link> |
        <Link href='/ch8'><a>Chapter 8</a></Link> |
      </nav>
    </header>

    { children }

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)
