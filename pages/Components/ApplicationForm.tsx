import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Field from './Field';
import { useState, useEffect } from 'react';
import useHttp from '../Hooks/use-http';
import { useRouter } from 'next/router';

const ApplicationForm: React.FC<any> = ({ fields }) => {
  const [formData, setFormData] = useState<any[]>([]);
  const [isBtnDisable, setIsBtnDisable] = useState(true);
  const {status, formFiledsHandler} = useHttp();
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString();

  useEffect(() => {
    if (fields.length) {
      const requiredFieldsLength = fields.reduce((a: number, i: any) => {
        return i.required ? (a = a + 1) : a;
      }, 0);
      if (requiredFieldsLength !== formData.length) {
        setIsBtnDisable(true);
      } else if (formData.length) {
        const isAnyFiledInValid = formData.find((item: any) => !item.isValid);
        if (isAnyFiledInValid) {
          setIsBtnDisable(true);
        } else {
          setIsBtnDisable(false);
        }
      }
    }
  }, [formData, fields]);

  const formFieldsChangeHandler = (stateObj: any) => {
    const array: any[] = [...formData];
    const elementIndex = array.findIndex(
      (item: any) => item.name === stateObj.name,
    );
    if (elementIndex > -1) {
      array[elementIndex]['isValid'] = stateObj.isValid;
      array[elementIndex]['value'] = stateObj.value;
      array[elementIndex]['type'] = stateObj.type;
      setFormData(array);
    } else {
      array.push(stateObj);
      setFormData(array);
    }
  };

  const submitHandler = () => {
    const requestBody: any = {};
    formData.map( (item: any) => {
      if(item.type === 'number') {
        requestBody[item.name] = +(item.value) 
      } else {
        requestBody[item.name] = item.value;
      }
    })
    formFiledsHandler({url: `http://localhost:3000/api/lenders/${lenderSlug}`, method: 'POST', requestBody})
  };

  return (
   <>
    {!status  && <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography
        component="h6"
        variant="h4"
        align="center"
        sx={{ fontSize: '1rem' }}
      >
        Application Form
      </Typography>

      <Grid container spacing={3}>
        {fields.map((field: any) => (
          <Field
            key={field.name}
            field={field}
            onChangeHandler={formFieldsChangeHandler}
          />
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          onClick={submitHandler}
          disabled={isBtnDisable}
        >
          Submit
        </Button>
      </Box>
    </Paper> } {
      status && status.decision === 'accepted' && <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography
        component="h6"
        variant="h4"
        align="center"
        sx={{ fontSize: '1rem' }}
      >
        Thank you for applying for the loan
      </Typography>
     </Paper> 
    } {
      status && status.decision === 'declined' && <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography
        component="h6"
        variant="h4"
        align="center"
        sx={{ fontSize: '1rem' }}
      >
        Sorry unable to process the loan
      </Typography>
     </Paper> 
    }
    </> 
  );
};

export default ApplicationForm;
