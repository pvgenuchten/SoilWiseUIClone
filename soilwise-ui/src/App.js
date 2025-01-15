import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  Divider,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Language,
  ContactMail,
  DataObject,
  Map,
  Link,
  LinkOff,
  GitHub,
  Build as ServiceIcon,
  Expand,
  Business,
  Person,
  Email,
  Phone,
  LocationOn,
  CalendarToday,
  Update,
} from "@mui/icons-material";

const getStatusIcon = (status) => {
  switch (status) {
    case "valid":
      return <Link sx={{ color: "success.main" }} />;
    case "warning":
      return <Link sx={{ color: "warning.main" }} />;
    case "invalid":
      return <LinkOff sx={{ color: "error.main" }} />;
    default:
      return null;
  }
};

const LeftColumn = ({ isSmallScreen }) => {
  const renderContact = (name, role, email, url) => (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Person color="primary" fontSize="small" />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
      </Box>
      <Box sx={{ pl: 3 }}>
        <Typography variant="body2">Role: {role}</Typography>
        {email && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Email fontSize="small" color="action" />
            <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
              {email}
            </Typography>
          </Box>
        )}
        {url && (
          <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
            Url: {url}
          </Typography>
        )}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        width: isSmallScreen ? "100%" : "60%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
        {/* Title with Icon */}
        <Typography
          variant={isSmallScreen ? "h6" : "h5"}
          sx={{ mt: 0, mb: 0, fontWeight: "bold", display: "inline" }}
        >
          Net Primary Production (Senegal Delta, Senegal - Dekadal - 30m)
        </Typography>

        {/* Service Chip with Icon */}
        <Chip
          icon={<ServiceIcon fontSize="small" />}
          label="Service"
          color="primary"
          size="small"
          sx={{ ml: 1 }}
        />
      </Box>
      <Box sx={{ display: "flex", gap: 1, mb: 0 }}>
        {["geoscientificInformation", "Africa", "WaPOR", "Dekadal"].map((tag) => (
          <Chip key={tag} label={tag} size="small" />
        ))}
      </Box>

      <Typography sx={{ fontSize: isSmallScreen ? "0.875rem" : "1rem" }}>
        Net Primary Production (NPP) is a fundamental characteristic of an
        ecosystem, expressing the conversion of carbon dioxide into biomass
        driven by photosynthesis. The plot value represents the mean daily NPP
        for that specific dekad.
      </Typography>

      <Paper sx={{ mb: 0 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            bgcolor: "grey.100",
            p: 1,
          }}
        >
          <DataObject sx={{ mr: 1 }} />
          <Typography variant="h6">Metadata</Typography>
        </Box>
        <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid item xs={12} md={6} >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <ContactMail color="primary" />
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Contacts
                  </Typography>
                </Box>
                {renderContact(
                  "Hongyu Chen",
                  "author",
                  "hongyuc92@zedat.fu-berlin.de"
                )}
                {renderContact(
                  "Matthias. C. Rillig",
                  "projectLeader",
                  "rillig@zedat.fu-berlin.de"
                )}
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Business color="primary" fontSize="small" />
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      ZALF
                    </Typography>
                  </Box>
                  <Box sx={{ pl: 3 }}>
                    <Typography variant="body2">Role: publisher</Typography>
                    <Typography variant="body2" sx={{ wordWrap: "break-word" }}>
                      Position: Research Platform 'Data Analysis & Simulation' -
                      Workgroup Research Data Management
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1,
                      }}
                    >
                      <Phone fontSize="small" color="action" />
                      <Typography variant="body2">+49 33432 82 300</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Email fontSize="small" color="action" />
                      <Typography
                        variant="body2"
                        sx={{ wordBreak: "break-all" }}
                      >
                        dataservice@zalf.de
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                    >
                      <LocationOn
                        fontSize="small"
                        color="action"
                        sx={{ mt: 0.5 }}
                      />
                      <Box>
                        <Typography variant="body2">
                          Eberswalder Strasse 84
                        </Typography>
                        <Typography variant="body2">
                          15374 Müncheberg
                        </Typography>
                        <Typography variant="body2">
                          Brandenburg, Germany
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <CalendarToday color="primary" />
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Temporal
                  </Typography>
                </Box>
                <Box sx={{ pl: 3 }}>
                  <Typography variant="body2">Created: 2024-02-27</Typography>
                  <Typography variant="body2">Updated: 2024-03-19</Typography>
                  <Typography variant="body2">Temporal extent: date</Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <DataObject color="primary" />
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Formats
                  </Typography>
                </Box>
                <Box sx={{ pl: 3 }}>
                  <Typography variant="body2">CSV</Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <Language color="primary" />
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Language
                  </Typography>
                </Box>
                <Box sx={{ pl: 3 }}>
                  <Typography variant="body2">eng</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

const RightColumn = ({ isSmallScreen }) => {
  return (
    <Box
      sx={{
        width: isSmallScreen ? "100%" : "40%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Paper
        sx={{
          p: 3,
          height: isSmallScreen ? "300px" : "400px",
          top: isSmallScreen ? 0 : 16,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Map color="primary" />
          <Typography variant="h6">Map Preview</Typography>
        </Box>
        <Box
          sx={{
            height: "calc(100% - 40px)",
            bgcolor: "grey.100",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Map Preview Content
        </Box>
      </Paper>

      <Paper>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
            bgcolor: "grey.100",
            p: 1,
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DataObject sx={{ mr: 1 }} />
            <Typography variant="h6">Available Links</Typography>
          </Box>
          <Typography variant="caption" sx={{ whiteSpace: "nowrap" }}>
            Last Checked: 12/21/2024
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 1 }}>
          {[
            {
              title: "NPP-DEKAD-10-DAYS",
              description: "Net Primary Production (Senegal Delta)",
              status: "valid",
            },
            { title: "Download data from WAPOR Website", status: "warning" },
            {
              title:
                "Download: Net Primary Production (Senegal Delta, Senegal - Dekadal - 30m)",
              status: "invalid",
            },
          ].map((link) => (
            <Paper key={link.title} variant="outlined" sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                {getStatusIcon(link.status)}
                <Typography
                  variant="subtitle2"
                  sx={{ wordBreak: "break-word" }}
                >
                  {link.title}
                </Typography>
              </Box>
              {link.description && (
                <Typography
                  variant="body2"
                  sx={{ mt: 1, wordBreak: "break-word" }}
                >
                  {link.description}
                </Typography>
              )}
            </Paper>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

const GitComponent = ({ isSmallScreen }) => {
  return (
    <Paper sx={{ width: "100%", mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, pl: 2 }}>
        0 comments
      </Typography>
      <Box sx={{ bgcolor: "grey.50", p: 2, borderRadius: 1 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 2,
            flexWrap: "wrap",
          }}
        >
          <Button size="small" variant="text" sx={{ color: "text.secondary" }}>
            Write
          </Button>
          <Button size="small" variant="text" sx={{ color: "text.secondary" }}>
            Preview
          </Button>
          <Box sx={{ flex: 1 }} />
          <Button
            size="small"
            startIcon={<Expand />}
            sx={{ color: "text.secondary" }}
          >
            Aa
          </Button>
        </Box>
        {/* Replace TextareaAutosize with a regular textarea with fixed height */}
        <textarea
          placeholder="Sign in to comment"
          disabled
          style={{
            width: "100%",
            height: "100px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            resize: "vertical",
            boxSizing: "border-box",
            fontFamily: "inherit",
            fontSize: "inherit",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: isSmallScreen ? "stretch" : "flex-end",
          p: 2,
        }}
      >
        <Button
          variant="contained"
          color="success"
          startIcon={<GitHub />}
          fullWidth={isSmallScreen}
          sx={{
            bgcolor: "#238636",
            textTransform: "none",
            minWidth: isSmallScreen ? "100%" : "auto",
          }}
        >
          Sign in with GitHub
        </Button>
      </Box>
    </Paper>
  );
};

const SoilWiseUI = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        maxWidth: 1200,
        m: "auto",
        display: "flex",
        flexDirection: "column",
        p: isSmallScreen ? 2 : 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <LeftColumn isSmallScreen={isSmallScreen} />
        <RightColumn isSmallScreen={isSmallScreen} />
      </Box>

      <GitComponent isSmallScreen={isSmallScreen} />
      <Divider sx={{ mt: 3 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
          mb: 2,
          flexDirection: isSmallScreen ? "column" : "row",
          gap: isSmallScreen ? 2 : 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: isSmallScreen ? "100%" : "auto",
          }}
        >
          <Update fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            Updated: 2024-03-19 14:30 UTC
          </Typography>
        </Box>
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "auto",
            display: "flex",
            justifyContent: isSmallScreen ? "center" : "flex-end",
          }}
        >
          <a
            href="https://your-link-here.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/soilwise-white-logo.png"
              alt="Logo"
              style={{
                height: 35,
                backgroundColor: "gray",
                maxWidth: "100%",
              }}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default SoilWiseUI;
