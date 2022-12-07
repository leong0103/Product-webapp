import { Box, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SelectButton from "../components/SelectButton";
import { useState } from "react";

interface SelectButtonExpandProp {
  groupName: string;
  buttonName: string[];
  handleButtonClick: (sortMethod: string) => void;
}

export default function SelectButtonExpand({
  groupName,
  buttonName,
  handleButtonClick,
}: SelectButtonExpandProp) {
  const [isSelected, setIsSelected] = useState<boolean>();

  const handleExpandClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <>
      {isSelected ? (
        <>
          <Box sx={{ mt: 8, display: "inline-flex", alignItems: "center" }}>
            <Typography sx={{ m: "10px" }}>{groupName}</Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleExpandClick}
            >
              <ExpandLessIcon />
            </IconButton>
          </Box>
          <SelectButton
            buttonName={buttonName}
            handleChange={handleButtonClick}
          />
        </>
      ) : (
        <>
          <Box sx={{ mt: 8, display: "inline-flex", alignItems: "center" }}>
            <Typography sx={{ m: "10px" }}>{groupName}</Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleExpandClick}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </>
      )}
    </>
  );
}
