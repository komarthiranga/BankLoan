import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type lenders = {
  name: string;
  slug: string;
};
const BanksList: React.FC<any> = ({ lenders }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      {lenders.map((lender: lenders) => (
        <Card variant="outlined" key={lender.name} sx={{marginBottom: 2, backgroundColor: 'rgb(18, 18, 18)', color: 'rgb(255, 255, 255)'}}>
          <React.Fragment>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="white"
                fontWeight="bold"
                gutterBottom
              >
                {lender.name}
              </Typography>
              <Typography variant="body2">
                Apply for the personal loan.
              </Typography>
            </CardContent>
            <CardActions>
              <Button data-testid={lender.slug} size="small" href={`/${lender.slug}`}>Apply Here</Button>
            </CardActions>
          </React.Fragment>
        </Card>
      ))}
    </Box>
  );
};

export default BanksList;
