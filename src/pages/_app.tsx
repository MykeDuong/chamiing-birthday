import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { Fraunces } from "next/font/google"

import "~/styles/globals.css";

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className + fraunces.variable}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
