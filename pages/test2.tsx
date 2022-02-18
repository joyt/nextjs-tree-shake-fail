import type { NextPage } from 'next';
import Head from 'next/head';

import { STRING2 } from '../strings';

const Test2: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Test 2</title>
      </Head>
      <div>{STRING2}</div>
    </div>
  );
};

export default Test2;
