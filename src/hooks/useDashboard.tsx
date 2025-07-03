import { useUser } from "../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import type { DashboardResponse } from "../types/dashboard";

const fetchDashboardData = async (
  role: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userId: string
): Promise<DashboardResponse> => {
  await new Promise((res) => setTimeout(res, 500)); // simulate network delay
  console.log(userId);
  if (role === "teacher") {
    return {
      dashboard: {
        userType: "teacher",
        teacherName: "Coach Luebbe",
        leagues: [
          {
            name: "8th Grade Basketball",
            sport: "Basketball",
            grade: 8,
            teams: 4,
          },
          { name: "7th Grade Soccer", sport: "Soccer", grade: 7, teams: 3 },
          { name: "6th Grade Track", sport: "Track", grade: 6, teams: 2 },
        ],
      },
    };
  }

  if (role === "student") {
    return {
      dashboard: {
        userType: "student",
        studentName: "Robert Athlete",
        assignedTeams: [
          {
            league: "7th Grade Basketball",
            teamName: "Wildcats",
            nextGame: "2025-09-12",
            stats: { points: 21, rebounds: 9 },
          },
          {
            league: "7th Grade Soccer",
            teamName: "Tigers",
            nextGame: "2025-09-18",
            stats: { goals: 2, assists: 1 },
          },
        ],
        upcomingGames: [
          {
            league: "7th Grade Basketball",
            date: "2025-09-12",
            opponent: "Panthers",
          },
          {
            league: "7th Grade Soccer",
            date: "2025-09-18",
            opponent: "Sharks",
          },
        ],
      },
    };
  }

  if (role === "parent") {
    return {
      dashboard: {
        userType: "parent",
        parentName: "Parent Lagen",
        children: [
          {
            name: "Robert Athlete",
            grade: 7,
            teams: [
              {
                league: "7th Grade Basketball",
                teamName: "Wildcats",
                stats: { points: 21 },
              },
              {
                league: "7th Grade Soccer",
                teamName: "Tigers",
                stats: { goals: 2 },
              },
            ],
            upcomingGames: [
              {
                league: "7th Grade Basketball",
                date: "2025-09-12",
                opponent: "Panthers",
              },
            ],
          },
        ],
        notifications: [
          "Robert has a basketball game on 2025-09-12",
          "Soccer practice moved to Friday",
        ],
      },
    };
  }

  if (role === "admin") {
    return {
      dashboard: {
        userType: "admin",
        adminName: "admin",
        schools: [
          {
            name: "Parachute Middle School",
            totalLeagues: 8,
            totalUsers: 200,
            activeTeachers: 6,
          },
        ],
        recentActivity: [
          {
            action: "Coach Luebbe created 8th Grade Basketball",
            date: "2025-09-01",
          },
          { action: "Parent Lagen registered", date: "2025-08-29" },
        ],
        pendingApprovals: [
          {
            name: "Bilbo NewTeacher",
            role: "teacher",
            requested: "2025-09-05",
          },
        ],
      },
    };
  }

  // Default fallback for unknown role
  return { dashboard: { userType: "unknown" } };
};

export function useDashboard() {
  const { user } = useUser();
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard", user?.role, user?.email],
    queryFn: () => fetchDashboardData(user?.role ?? "", user?.email ?? ""),
    enabled: !!user,
  });

  return { dashboard: data?.dashboard, isLoading, error };
}
