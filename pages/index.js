import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Códigos de Hamming y Códigos de Golay!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Códigos de Hamming &rarr;</h3>
            <p>Descubiertos entre 1947 y 1948 por R. W. Hamming y M. J. E. Golay, se trata de un conjunto decódigos lineales óptimos para corregir errores que afecten a un solo símbolo.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Códigos de Golay &rarr;</h3>
            <p>Los códigos de Golay están formados por una familia de cuatro códigos, en este apartado haremos la presentación mediante el uso de matrices generatrices.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Demostraciones &rarr;</h3>
            <p>G_{24} tiene distancia mínima 8.</p>
            <p>Todas las palabras de G24 tienen peso mínimo de 4.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Ejemplos en Matlab &rarr;</h3>
            <p>
              Click para ver a continuación.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
