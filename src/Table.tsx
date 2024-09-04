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
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import _ from "lodash";

interface TableRowData {
  id: number;
  name: string;
  status: string;
  assigner: string;
  src: string;
}

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
  const [menu, setMenu] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (open) {
      setOpen(false);
      setMenu("");
      setFilterValue("");
      setMenuAnchorEl(null);
    } else {
      setOpen(true);
      setMenuAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleMenuItemClick = (items: string, value?: string) => {
    setMenu(items);
    setFilterValue(value || "");
    setOpen(false);
    handleMenuClose();
  };

  const handleCloseFilter = () => {
    setMenu("");
    setFilterValue("");
    setOpen(false);
    setMenuAnchorEl(null);
  };
  const filteredData = menu
  ? tableData.filter((row) => (row as any)[menu] === filterValue)
  : tableData;
  const statusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "#ef5350";
      case "Completed":
        return "#4caf50";
      case "Initial":
        return "#b0bec5";
      default:
        return "white";
    }
  };

  const cellStyle = {
    border: "1px solid black",
    textAlign: "center",
  };

  return (
    <Grid container xs={12} sm={6} md={3} lg={3}>
        <Grid item>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ backgroundColor: "grey" }}
        >
          {open ? "Filter" : "Filter"}
        </Button>
      </Grid>
      {open && (
        <Grid item>
          <Button
            onClick={handleCloseFilter}
            variant="contained"
            sx={{ backgroundColor: "red", color: "white" }}
          >
            Close Filter
          </Button>
        </Grid>
      )}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleMenuItemClick("status", "Initial")}>
          <Typography>Initial</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("status", "Pending")}>
          <Typography>Pending</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("status", "Completed")}>
          <Typography>Completed</Typography>
        </MenuItem>
      </Menu>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...cellStyle, backgroundColor: "lightgrey" }}>
                ID
              </TableCell>
              <TableCell sx={{ ...cellStyle, backgroundColor: "lightgrey" }}>
                Name
              </TableCell>
              <TableCell sx={{ ...cellStyle, backgroundColor: "lightgrey" }}>
                Status
              </TableCell>
              <TableCell sx={{ ...cellStyle, backgroundColor: "lightgrey" }}>
                Assigner
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={cellStyle}>{row.id}</TableCell>
                <TableCell sx={cellStyle}>{row.name}</TableCell>
                <TableCell sx={cellStyle}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: statusColor(row.status),
                      color: "black",
                      outlineColor: statusColor(row.status),
                      width:"100px"
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
    </Grid>
  );
}

export default TableComponent;

