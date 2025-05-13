import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Container, Typography, CardMedia, Box } from "@mui/material";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductDetail() {
  const { id } = useParams();
  const { token } = useAuth();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProduct(res.data);
    };

    fetchProduct();
  }, [id, token]);

  if (!product) return <p>Carregando...</p>;

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ width: 200, height: 200, objectFit: "contain", mb: 2 }}
        />
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          R$ {product.price}
        </Typography>
        <Typography>{product.description}</Typography>
      </Box>
    </Container>
  );
}
