import React from 'react';
import { Container, Box, Typography, Button, Card, CardContent, Grid, Chip, useTheme } from '@mui/material';

const dummyLeagues = [
  { name: '8th Grade Basketball', sport: 'Basketball', grade: 8, teams: 4 },
  { name: '8th Grade Volleyball', sport: 'Volleyball', grade: 8, teams: 3 },
  { name: '8th Grade Flag Football', sport: 'Flag Football', grade: 8, teams: 2 },
  { name: '7th Grade Soccer', sport: 'Soccer', grade: 7, teams: 3 },
  { name: '7th Grade Basketball', sport: 'Basketball', grade: 7, teams: 3 },
  { name: '7th Grade Ultimate Frisbee', sport: 'Ultimate Frisbee', grade: 7, teams: 2 },
  { name: '6th Grade Basketball', sport: 'Basketball', grade: 6, teams: 2 },
  { name: '6th Grade Track', sport: 'Track', grade: 6, teams: 3 },
  { name: '6th Grade Volleyball', sport: 'Volleyball', grade: 6, teams: 2 },
];

const gradeColors: Record<number, 'primary' | 'secondary' | 'default'> = {
  6: 'default',
  7: 'secondary',
  8: 'primary',
};

const LandingPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box mt={4} textAlign="center">
        <Typography variant="h3" gutterBottom>
          Welcome, Coach Luebbe
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Here are your active leagues for grades 6-8. Manage teams, schedules, and stats easily.
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
            + Create New League
          </Button>
          <Button variant="contained" color="secondary" size="large">
            View All Leagues
          </Button>
        </Box>
      </Box>

      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          Your Leagues
        </Typography>
        <Grid container spacing={3} alignItems="stretch">
          {dummyLeagues.map((league) => (
            <Grid component={Card}>
              <Card
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  width: 275,
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  height: '100%',
                }}
                elevation={3}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Chip
                      label={`Grade ${league.grade}`}
                      color={gradeColors[league.grade]}
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="h6">{league.name}</Typography>
                  </Box>
                  <Typography color="text.secondary">Sport: {league.sport}</Typography>
                  <Typography color="text.secondary">Teams: {league.teams}</Typography>
                </CardContent>
                <Box p={2} pt={0}>
                  <Button variant="outlined" color="primary" size="small" fullWidth>
                    Manage League
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default LandingPage;
