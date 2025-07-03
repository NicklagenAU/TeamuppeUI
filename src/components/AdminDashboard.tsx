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
  Button,
} from "@mui/material";

type School = {
  name: string;
  totalLeagues: number;
  totalUsers: number;
  activeTeachers: number;
};

type Activity = {
  action: string;
  date: string;
};

type PendingApproval = {
  name: string;
  role: string;
  requested: string;
};

type AdminDashboardProps = {
  adminName: string;
  schools: School[];
  recentActivity: Activity[];
  pendingApprovals: PendingApproval[];
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  adminName,
  schools,
  recentActivity,
  pendingApprovals,
}) => (
  <Container maxWidth="lg">
    <Box mt={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Welcome, {adminName}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Manage school stats, activity, and user approvals.
      </Typography>
    </Box>

    <Box mt={6}>
      <Typography variant="h5" gutterBottom>
        Schools Overview
      </Typography>
      <Grid container spacing={3}>
        {schools.map((school, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">{school.name}</Typography>
                <Typography>Total Leagues: {school.totalLeagues}</Typography>
                <Typography>Total Users: {school.totalUsers}</Typography>
                <Typography>
                  Active Teachers: {school.activeTeachers}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box mt={6}>
      <Typography variant="h5" gutterBottom>
        Recent Activity
      </Typography>
      <Paper sx={{ mb: 4 }}>
        <List>
          {recentActivity.length === 0 ? (
            <ListItem>
              <ListItemText primary="No recent activity." />
            </ListItem>
          ) : (
            recentActivity.map((item, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={item.action} secondary={item.date} />
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </Box>

    <Box mt={6}>
      <Typography variant="h5" gutterBottom>
        Pending User Approvals
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Requested</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingApprovals.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4}>No pending approvals.</TableCell>
              </TableRow>
            ) : (
              pendingApprovals.map((user, idx) => (
                <TableRow key={idx}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.requested}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    >
                      Approve
                    </Button>
                    <Button variant="outlined" color="error" size="small">
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  </Container>
);

export default AdminDashboard;
