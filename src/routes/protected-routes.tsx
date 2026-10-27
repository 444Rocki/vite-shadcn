import { DashboardLayout } from "@/components/layout/DashBoardLayout";
import { getCookie } from "@/services/storage";
import { Navigate, Outlet} from "react-router-dom";

export const ProtectedRoutes = () => {
  const userData = getCookie("userData");
  if (!userData) {
    return <Navigate to='/login' replace />;
  }
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};