import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      
      <div className="container">
      <img style={{'width': '20em'}} src='icons/dnicon.png'/>
      <p style={{'text-align': 'left', 'font-size': '1.3em', 'font-weight': '600'}}>
      Привет! <br/> 
      Это проект одного из создателей ботвы. Во время семестра с сетями я думал 
      как бы организовать теорию так, чтобы ее было удобно читать. В итоге пришел к выводу, что 
      было бы полезно создать единый сборник с материалами — лекциями, лабами и рк по 
      сетям (как минимум для ИУ6).<br/> 
      Проект "Сети для самых маленьких" уже стал культовым, но подача материала в нем не 
      всегда последовательная и структурированная. Поэтому я решил придерживаться 
      аналогичного формата, но изложить все в соответствии с теорией нашего курса.<br/> 
      Приятного чтения!
      </p>
        <div  style={{'max-width':'80vw'}}>
          <Link
            className="button button--secondary button--lg"
            to="/lectures">
            Лекции
          </Link>
          <div style={{'padding-left':'10px', 'padding-bottom':'10px'}}/>
          <Link
            className="button button--secondary button--lg"
            to="/labs">
            Лабораторки
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
