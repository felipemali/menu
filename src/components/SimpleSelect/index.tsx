import { useContext } from "react";
import { InputLabel, MenuItem, FormControl, Typography } from "@mui/material/";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuContext } from "../../context/MenuContext";
import WarningIcon from "@mui/icons-material/Warning";

type Table = {
  table: string;
  setTable: (value: string) => void;
};

const SimpleSelect = ({ table, setTable }: Table) => {
  const numberTables = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const { ordersPlaced } = useContext(MenuContext);

  const handleChange = (event: SelectChangeEvent) => {
    setTable(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mesa</InputLabel>
      <Select
        sx={{ display: "flex" }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={table}
        label="number table"
        onChange={handleChange}
      >
        {numberTables.map((e, i) => {
          const tableExists = ordersPlaced.some(
            (orderGroup) => orderGroup.table === e.trim()
          );

          return (
            <MenuItem
              key={i}
              value={e.trim()}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography
                variant="body1"
                sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
              >
                {e.trim()}
                {tableExists && <WarningIcon color="warning" sx={{ ml: 1 }} />}
              </Typography>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SimpleSelect;
