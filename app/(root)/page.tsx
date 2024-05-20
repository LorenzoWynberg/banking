import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = { firstName: 'Lorenzo' };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your acount and transactions efficiently.'
          />
        </header>
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={50304.63}
        />
      </div>
    </section>
  );
};

export default Home;
