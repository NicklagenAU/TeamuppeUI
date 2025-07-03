// src/components/TeacherDashboard.tsx
import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import LeagueCard from "./LeagueCard";

type TeacherDashboardProps = {
  leagues: Array<{ name: string; sport: string; grade: number; teams: number }>;
  teacherName?: string;
};

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  leagues,
  teacherName,
}) => (
  <Container maxWidth="lg">
    <Box mt={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Welcome, {teacherName || "Coach"}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Here are your active leagues for grades 6-8. Manage teams, schedules,
        and stats easily.
      </Typography>
      <Box mt={4} mb={2}>
        <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
          + Create New League
        </Button>
        <Button variant="outlined" color="primary" size="large">
          View All Teams
        </Button>
      </Box>
    </Box>
    <Box mt={6}>
      <Typography variant="h5" gutterBottom>
        Your Leagues
      </Typography>
      <Grid container spacing={3} alignItems="stretch">
        {leagues.map((league, idx) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={idx}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <LeagueCard {...league} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default TeacherDashboard;
