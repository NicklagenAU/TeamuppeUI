import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

type Team = {
  league: string;
  teamName: string;
  nextGame?: string;
  stats: Record<string, number>;
};

type UpcomingGame = {
  league: string;
  date: string;
  opponent: string;
};

type StudentDashboardProps = {
  studentName: string;
  assignedTeams: Team[];
  upcomingGames: UpcomingGame[];
};

const StudentDashboard: React.FC<StudentDashboardProps> = ({
  studentName,
  assignedTeams,
  upcomingGames,
}) => (
  <Container maxWidth="md">
    <Box mt={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Welcome, {studentName}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Here are your teams and upcoming games.
      </Typography>
    </Box>

    <Box mt={6}>
      <Typography variant="h5" gutterBottom>
        Your Teams
      </Typography>
      <Grid container spacing={3}>
        {assignedTeams.map((team, idx) => (
          <Grid size={{ xs: 12, sm: 6 }} key={idx}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">{team.league}</Typography>
                <Typography>Team: {team.teamName}</Typography>
                <Typography>Next Game: {team.nextGame}</Typography>
                <Box mt={2}>
                  <Typography variant="subtitle2">Stats:</Typography>
                  {Object.entries(team.stats).map(([stat, value]) => (
                    <Typography key={stat}>
                      {stat}: {value}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box mt={6}>
      <Typography variant="h5" gutterBottom>
        Upcoming Games
      </Typography>
      <Paper sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>League</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Opponent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {upcomingGames.map((game, idx) => (
              <TableRow key={idx}>
                <TableCell>{game.league}</TableCell>
                <TableCell>{game.date}</TableCell>
                <TableCell>{game.opponent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  </Container>
);

export default StudentDashboard;
