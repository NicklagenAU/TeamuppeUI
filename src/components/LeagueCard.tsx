import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
} from "@mui/material";

type LeagueCardProps = {
  name: string;
  sport: string;
  grade: number;
  teams: number;
  onManage?: () => void;
};

const gradeColors: Record<number, "primary" | "secondary" | "default"> = {
  6: "default",
  7: "secondary",
  8: "primary",
};

const LeagueCard: React.FC<LeagueCardProps> = ({
  name,
  sport,
  grade,
  teams,
  onManage,
}) => (
  <Card
    sx={{
      minWidth: 275,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <CardContent>
      <Box display="flex" alignItems="center" mb={1}>
        <Chip
          label={`Grade ${grade}`}
          color={gradeColors[grade]}
          size="small"
          sx={{ mr: 1 }}
        />
        <Typography variant="h6">{name}</Typography>
      </Box>
      <Typography color="text.secondary">Sport: {sport}</Typography>
      <Typography color="text.secondary">Teams: {teams}</Typography>
    </CardContent>
    <Box p={2} pt={0}>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        fullWidth
        onClick={onManage}
      >
        Manage League
      </Button>
    </Box>
  </Card>
);

export default LeagueCard;
