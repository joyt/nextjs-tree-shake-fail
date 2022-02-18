import type { NextPage } from 'next';
import Head from 'next/head';

import { getString2 } from '../strings';

const Test2: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Test 2</title>
      </Head>
      <div>{/*#__PURE__*/ getString2()}</div>
    </div>
  );
};

export default Test2;
