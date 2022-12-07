import { createAPIEndpoint, ENDPOINTS } from "../apiClient/DunnyjsonApi";
import { ProductResponse } from "../pages/ProductPage";
import { useState } from "react";

export function useProductPage() {
  let sortOption: string[] = [
    "category",
    "title",
    "description",
    "price",
    "stock",
  ];

  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [categoriesOption, setCategoriesOption] = useState<string[]>([]);

  
  const handleCategories = (category: string) => {
    if (category === "remove filter") {
      getProducts();
    } else {
      createAPIEndpoint(ENDPOINTS.category)
      .fetch(category)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };
  
  const handleDeleteClick = (id: number) => {
    const result = products.filter((product) => product.id !== id);
    createAPIEndpoint(ENDPOINTS.products).delete!(id).then((res) => {
      console.log(res);
    });
    setProducts(result);
  };

  const handleSort = (sortMethod: string) => {
    let newProduct = [...products];
    if (sortMethod === "price" || sortMethod === "stock") {
      newProduct = newProduct.sort((a, b) => b[sortMethod] - a[sortMethod]);
    } else if (
      sortMethod === "category" ||
      sortMethod === "title" ||
      sortMethod === "description"
    ) {
      newProduct = newProduct.sort((a, b) =>
        a[sortMethod].localeCompare(b[sortMethod])
      );
    }
    setProducts(newProduct);
  };

  const handleSearch = (input: string | undefined) => {
    createAPIEndpoint(ENDPOINTS.search)
      .fetch(input)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProducts = () => {
    createAPIEndpoint(ENDPOINTS.products)
      .fetch()
      .then((res) => {
        let products: ProductResponse[] = res.data.products;
        let sortedByTitleProduct: ProductResponse[] = products.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setProducts(sortedByTitleProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategories = () => {
    createAPIEndpoint(ENDPOINTS.categories)
      .fetch()
      .then((res) => {
        let arr = res.data;
        arr.unshift("remove filter");
        setCategoriesOption(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    sortOption,
    products,
    setProducts,
    categoriesOption,
    setCategoriesOption,
    handleCategories,
    handleDeleteClick,
    handleSort,
    handleSearch,
    getCategories,
    getProducts,
  };
}
