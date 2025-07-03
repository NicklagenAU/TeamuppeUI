export type League = {
  name: string;
  sport: string;
  grade: number;
  teams: number;
};

export type Team = {
  league: string;
  teamName: string;
  nextGame?: string;
  stats: Record<string, number>;
};

export type UpcomingGame = {
  league: string;
  date: string;
  opponent: string;
};

export type Child = {
  name: string;
  grade: number;
  teams: Team[];
  upcomingGames: UpcomingGame[];
};

export type TeacherDashboardData = {
  userType: "teacher";
  teacherName: string;
  leagues: League[];
};

export type StudentDashboardData = {
  userType: "student";
  studentName: string;
  assignedTeams: Team[];
  upcomingGames: UpcomingGame[];
};

export type ParentDashboardData = {
  userType: "parent";
  parentName: string;
  children: Child[];
  notifications: string[];
};

export type AdminDashboardData = {
  userType: "admin";
  adminName: string;
  schools: {
    name: string;
    totalLeagues: number;
    totalUsers: number;
    activeTeachers: number;
  }[];
  recentActivity: {
    action: string;
    date: string;
  }[];
  pendingApprovals: {
    name: string;
    role: string;
    requested: string;
  }[];
};

export type UnkownDashboard = {
  userType: "unknown";
};

export type DashboardResponse =
  | { dashboard: TeacherDashboardData }
  | { dashboard: StudentDashboardData }
  | { dashboard: ParentDashboardData }
  | { dashboard: AdminDashboardData }
  | { dashboard: UnkownDashboard };
