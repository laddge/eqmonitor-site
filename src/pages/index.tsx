import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import { useColorMode } from "@docusaurus/theme-common";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const { colorMode, setColorMode } = useColorMode();
  return (
    <header className={clsx("hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img
            className={clsx(styles.heroLogo)}
            src={
              colorMode == "dark"
                ? "img/header-dark.svg"
                : "img/header-light.svg"
            }
            width="1000em"
            alt="EQMonitor logo"
          />
        </Heading>

        <div className={styles.buttons}>
          <a
            className={styles.fill}
            href="https://apps.apple.com/us/app/eqmonitor-%E5%9C%B0%E9%9C%87%E9%80%9F%E5%A0%B1/id6447546703"
          >
            <img alt="App Store で手に入れよう" src="img/AppStore.svg" />
          </a>
          <a
            className="button"
            href="https://play.google.com/store/apps/details?id=net.yumnumm.eqmonitor&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          >
            <img
              alt="Google Play で手に入れよう"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Earthquake monitoring application"
    >
      <HomepageHeader />
      <main>{/*<HomepageFeatures />*/}</main>
    </Layout>
  );
}
