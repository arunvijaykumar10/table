import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Tooltip,
  Grid,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import _ from "lodash";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const tableData = [
  {
    id: 1,
    name: "Shirt",
    status: "Initial",
    assigner: "Arun",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-9.webp",
  },
  {
    id: 2,
    name: "TShirt",
    status: "Initial",
    assigner: "Subha",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-8.webp",
  },
  {
    id: 3,
    name: "Jacket",
    status: "Completed",
    assigner: "Femi",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-1.webp",
  },
  {
    id: 4,
    name: "Trousers",
    status: "Pending",
    assigner: "Subha",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-8.webp",
  },
  {
    id: 5,
    name: "Jeans",
    status: "Initial",
    assigner: "Femi",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-1.webp",
  },
  {
    id: 6,
    name: "Pant",
    status: "Completed",
    assigner: "Arun",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-9.webp",
  },
  {
    id: 7,
    name: "Sweater",
    status: "Completed",
    assigner: "Arun",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-9.webp",
  },
  {
    id: 8,
    name: "Shirt",
    status: "Initial",
    assigner: "Arun",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-9.webp",
  },
  {
    id: 9,
    name: "Pant",
    status: "Initial",
    assigner: "Subha",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-8.webp",
  },
  {
    id: 10,
    name: "Hoodies",
    status: "Completed",
    assigner: "Femi",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-1.webp",
  },
  {
    id: 11,
    name: "Suit",
    status: "Pending",
    assigner: "Subha",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-8.webp",
  },
  {
    id: 12,
    name: "Scarf",
    status: "Initial",
    assigner: "Femi",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-1.webp",
  },
  {
    id: 13,
    name: "Cap",
    status: "Completed",
    assigner: "Arun",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-9.webp",
  },
  {
    id: 14,
    name: "Shoes",
    status: "Completed",
    assigner: "Arun",
    src: "https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-9.webp",
  },
];

function TableComponent() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false);
  const [menu, setMenu] = useState<string>("");
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (open) {
      setOpen(false);
      setMenu("");
      setMenuAnchorEl(null);
    } else {
      setOpen(true);
      setMenuAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleMenuItemClick = (groupBy: string) => {
    setMenu(groupBy);
    setOpen(false);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const statusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "grey";
      case "Completed":
        return "green";
      case "Initial":
        return '#ffca28';
    }
  };

  const cellStyle = {
    border: "1px solid black",
    textAlign: "center",
  };

  const groupedData = menu ? _.groupBy(tableData, menu) : { All: tableData };

  return (
    <Grid container xs={12} sm={3} md={3} lg={3}>
 <Button onClick={handleClick} variant="contained" color="primary">
        {open ? "Groupby X" : "Groupby"}
      </Button>
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleMenuItemClick("name")}>
          <Typography>Name</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("status")}>
          <Typography>Status</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("assigner")}>
          <Typography>Assigner</Typography>
        </MenuItem>
      </Menu>

      {menu && !open
        ? Object.keys(groupedData).map((key) => (
            <Accordion
              key={key}
              expanded={expanded === key}
              onChange={handleChange(key)}
            >
              <AccordionSummary
                expandIcon={<ArrowRightIcon />}
                aria-controls={`${key}-content`}
                id={`${key}-header`}
              >
                <Typography>{key}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{ ...cellStyle, backgroundColor: "lightgrey" }}
                        >
                          ID
                        </TableCell>
                        <TableCell
                          sx={{ ...cellStyle, backgroundColor: "lightgrey" }}
                        >
                          Name
                        </TableCell>
                        <TableCell
                          sx={{ ...cellStyle, backgroundColor: "lightgrey" }}
                        >
                          Status
                        </TableCell>
                        <TableCell
                          sx={{ ...cellStyle, backgroundColor: "lightgrey" }}
                        >
                          Assigner
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {groupedData[key].map((row) => (
                        <TableRow key={row.id}>
                          <TableCell sx={cellStyle}>{row.id}</TableCell>
                          <TableCell sx={cellStyle}>{row.name}</TableCell>
                          <TableCell sx={cellStyle}>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: statusColor(row.status),
                                color: "white",
                                outlineColor: statusColor(row.status),
                              }}
                            >
                              {row.status}
                            </Button>
                          </TableCell>
                          <TableCell sx={cellStyle}>
                            <Tooltip title={row.assigner}>
                              <Avatar src={row.src} />
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          ))
        : !menu && (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ ...cellStyle, backgroundColor: "lightgrey" }}
                    >
                      ID
                    </TableCell>
                    <TableCell
                      sx={{ ...cellStyle, backgroundColor: "lightgrey" }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{ ...cellStyle, backgroundColor: "lightgrey" }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      sx={{ ...cellStyle, backgroundColor: "lightgrey" }}
                    >
                      Assigner
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell sx={cellStyle}>{row.id}</TableCell>
                      <TableCell sx={cellStyle}>{row.name}</TableCell>
                      <TableCell sx={cellStyle}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: statusColor(row.status),
                            color: "white",
                            outlineColor: statusColor(row.status),
                          }}
                        >
                          {row.status}
                        </Button>
                      </TableCell>
                      <TableCell sx={cellStyle}>
                        <Tooltip title={row.assigner}>
                          <Avatar src={row.src} />
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
    </Grid>
  );
}

export default TableComponent;
