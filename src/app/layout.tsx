import * as React from "react";
import Box from "@mui/material/Box";
import GoogleAnalytics from "@/analytics/GoogleAnalytics";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import TopNav from "@/components/TopNav/TopNav";
import { GlobalStyle } from "@/components/GlobalStyle";

export const metadata = {
  title: "William Craig - Software Developer",
  description:
    "Personal website of William Craig, a software developer and graphic designer.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <ThemeRegistry>
          <TopNav />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID!}
        />
      </body>
    </html>
  );
};

export default RootLayout;
