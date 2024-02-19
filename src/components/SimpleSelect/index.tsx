import { useContext, useState } from "react";

import { InputLabel, MenuItem, FormControl } from "@mui/material/";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuContext } from "../../context/MenuContext";

type Table = {
  table: string;
  setTable: (value: string) => void;
};
const SimpleSelect = ({ table, setTable }: Table) => {
  const [valueTable, setValueTable] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);

  const { orderPlaced } = useContext(MenuContext);
  console.log(orderPlaced);

  const handleChange = (event: SelectChangeEvent) => {
    setTable(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mesa</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={table}
        label="number table"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {valueTable.map((e, i) => (
          <MenuItem key={i} value={e}>
            {e}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default SimpleSelect;
