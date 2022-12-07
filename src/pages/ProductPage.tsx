import { Box, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useProductPage } from "../hooks/useProductPage";
import SelectButtonExpand from "../components/SelectButtonExpand";
import useStateContext from "../hooks/useStateContext";

export interface ProductResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
}

export default function ProductPage() {
  const {
    sortOption,
    products,
    categoriesOption,
    handleCategories,
    handleDeleteClick,
    handleSort,
    handleSearch,
    getCategories,
    getProducts,
  } = useProductPage();

  const { context } = useStateContext();

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  useEffect(() => {
    handleSearch(context.searchInput);
  }, [context.searchInput]);

  return (
    <>
      <SelectButtonExpand
        groupName={"Sort"}
        buttonName={sortOption}
        handleButtonClick={handleSort}
      />
      <SelectButtonExpand
        groupName={"Filter"}
        buttonName={categoriesOption}
        handleButtonClick={handleCategories}
      />
      <Typography sx={{ ml: "10px" }}>
        {products.length} Product(s) found
      </Typography>
      <Box
        sx={{
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.length !== 0 ? (
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                handleDeleteClick={handleDeleteClick}
              />
            );
          })
        ) : (
          <h3>No Item</h3>
        )}
      </Box>
    </>
  );
}
