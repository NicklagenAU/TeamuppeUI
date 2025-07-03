import React from "react";
import { useDashboard } from "../hooks/useDashboard";
import TeacherDashboard from "../components/TeacherDashboard";
import StudentDashboard from "../components/StudentDashboard";
import ParentDashboard from "../components/ParentDashboard";
import AdminDashboard from "../components/AdminDashboard";
import NavBar from "../components/NavBar";
import { useUser } from "../context/UserContext";
import { CircularProgress, Box, Typography } from "@mui/material";

const DashboardPage: React.FC = () => {
  const { user } = useUser();
  const { dashboard, isLoading, error } = useDashboard();

  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box textAlign="center" mt={8}>
        <Typography color="error">
          Failed to load dashboard. Please try again.
        </Typography>
      </Box>
    );

  if (!user)
    return (
      <Box>
        <NavBar />
        <Box textAlign="center" mt={8}>
          <Typography variant="h5">
            Please log in to access your dashboard.
          </Typography>
        </Box>
      </Box>
    );

  return (
    <Box>
      <NavBar />
      {/* Dashboard content */}
      {(() => {
        switch (dashboard?.userType) {
          case "teacher":
            return <TeacherDashboard {...dashboard} />;
          case "student":
            return <StudentDashboard {...dashboard} />;
          case "parent":
            return <ParentDashboard {...dashboard} />;
          case "admin":
            return <AdminDashboard {...dashboard} />;
          default:
            return <div>No dashboard available for your user type.</div>;
        }
      })()}
    </Box>
  );
};

export default DashboardPage;
