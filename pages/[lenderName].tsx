import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Layout from './Components/Layout';
import Container from './Components/Container';
import ApplicationForm from './Components/ApplicationForm';
import useHttp from './Hooks/use-http';
import { useEffect } from 'react';

const LenderNamePage: NextPage = () => {
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString();
  const {data, formFiledsHandler} = useHttp();

  useEffect( () => {
      if(lenderSlug) {
        formFiledsHandler({url: `http://localhost:3000/api/lenders/${lenderSlug}`, method: 'GET'})
      }
  }, [lenderSlug]);
  
  return (
    <Layout>
      <Container>
        <ApplicationForm fields={data}/>
      </Container>
    </Layout>
  );
};

export default LenderNamePage;
