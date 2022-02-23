import { NextPage } from 'next';
import Layout from './Components/Layout';
import BanksList from './Components/BanksList';
import Container from './Components/Container';
const HomePage: NextPage = () => {
  const lenders = [
    { name: 'Bank of Azeroth', slug: 'bank-of-azeroth' },
    { name: 'Middle Earth Bank', slug: 'middle-earth-bank' },
    { name: 'Naboo Bank', slug: 'naboo-bank' },
  ];

  return (
    <Layout>
      <Container>
          <BanksList lenders={lenders} />
      </Container>
    </Layout>
  );
};

export default HomePage;
