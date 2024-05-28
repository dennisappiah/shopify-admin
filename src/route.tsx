import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import InvoicePage from "./pages/InvoicePage";
import ProfileForm from "./pages/ProfileForm";
import CalendarPage from "./pages/CalendarPage";
import FAQPage from "./pages/FAQPage";
import BarChartPage from "./pages/BarChartPage";
import PieChartPage from "./pages/PieChartPage";
import LinePage from "./pages/LinePage";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./Layout";
import GeographyChartPage from "./pages/GeographyChartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "team", element: <TeamPage /> },
      { path: "contacts", element: <ContactPage /> },
      { path: "invoices", element: <InvoicePage /> },
      { path: "form", element: <ProfileForm /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "faq", element: <FAQPage /> },
      { path: "bar", element: <BarChartPage /> },
      { path: "pie", element: <PieChartPage /> },
      { path: "line", element: <LinePage /> },
      { path: "geography", element: <GeographyChartPage /> },
    ],
  },
]);

export default router;
