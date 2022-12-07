import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductResponse } from "../pages/ProductPage";

interface ProductCardProp {
  product: ProductResponse;
  handleDeleteClick: (id: number) => void;
}

export default function ProductCard({
  product,
  handleDeleteClick,
}: ProductCardProp) {
  return (
    <>
      <Card
        raised
        sx={{
          maxWidth: 280,
          mx: "auto",
          m: 1.7,
          textAlign: "center",
        }}
      >
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ float: "right" }}
          onClick={() => handleDeleteClick(product.id)}
        >
          <DeleteIcon />
        </IconButton>
        <CardMedia
          component="img"
          height="300"
          image={product.images[0]}
          alt={product.title}
          title={product.title}
          sx={{ objectFit: "contain" }}
        />
        <CardHeader title={product.title} />
        <CardContent>
          <Typography fontWeight="700" fontSize="h3">
            {product.description}
          </Typography>
          <Typography sx={{ mt: 3 }}> £ {product.price}</Typography>

          <Typography>{product.stock} Left</Typography>
          <Typography fontSize="" sx={{ mt: 3 }}>
            {"Category: " + product.category}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
