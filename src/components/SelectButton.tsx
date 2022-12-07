import { Box, Button } from "@mui/material";

interface SelectButtonProp {
  buttonName: string[];
  handleChange: (change: string) => void;
}

export default function SelectButton({
  buttonName,
  handleChange,
}: SelectButtonProp) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {buttonName.map((name) => {
        return (
          <Button
            key={name}
            variant={name === "remove filter" ? "contained" : "outlined"}
            color={name === "remove filter" ? "error" : "primary"}
            size="small"
            sx={{ width: "2", m: "0.5%" }}
            onClick={() => handleChange(name)}
          >
            {name}
          </Button>
        );
      })}
    </Box>
  );
}
