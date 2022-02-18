import type { NextPage } from 'next';
import Head from 'next/head';

import { STRING1 } from '../strings';

const Test: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>
      <div>{STRING1}</div>
    </div>
  );
};

export default Test;
