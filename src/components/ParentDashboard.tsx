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
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

type Team = {
  league: string;
  teamName: string;
  stats: Record<string, number>;
};

type UpcomingGame = {
  league: string;
  date: string;
  opponent: string;
};

type Child = {
  name: string;
  grade: number;
  teams: Team[];
  upcomingGames: UpcomingGame[];
};

type ParentDashboardProps = {
  parentName: string;
  children: Child[];
  notifications: string[];
};

const ParentDashboard: React.FC<ParentDashboardProps> = ({
  parentName,
  children,
  notifications,
}) => (
  <Container maxWidth="md">
    <Box mt={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Welcome, {parentName}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        View your children’s teams, stats, and upcoming games.
      </Typography>
    </Box>

    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Notifications
      </Typography>
      <Paper sx={{ mb: 4 }}>
        <List>
          {notifications.length === 0 ? (
            <ListItem>
              <ListItemText primary="No new notifications." />
            </ListItem>
          ) : (
            notifications.map((note, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={note} />
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </Box>

    {children.map((child, idx) => (
      <Box key={idx} mt={4} mb={4}>
        <Divider />
        <Typography variant="h5" gutterBottom mt={2}>
          {child.name} (Grade {child.grade})
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Teams & Stats
        </Typography>
        <Grid container spacing={2}>
          {child.teams.map((team, tIdx) => (
            <Grid size={{ xs: 12, sm: 6 }} key={tIdx}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6">{team.league}</Typography>
                  <Typography>Team: {team.teamName}</Typography>
                  <Box mt={1}>
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
        <Box mt={3}>
          <Typography variant="h6" gutterBottom>
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
                {child.upcomingGames && child.upcomingGames.length > 0 ? (
                  child.upcomingGames.map((game, gIdx) => (
                    <TableRow key={gIdx}>
                      <TableCell>{game.league}</TableCell>
                      <TableCell>{game.date}</TableCell>
                      <TableCell>{game.opponent}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3}>No upcoming games.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      </Box>
    ))}
  </Container>
);

export default ParentDashboard;
