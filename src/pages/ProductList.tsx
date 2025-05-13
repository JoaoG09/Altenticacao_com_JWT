import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductList() {
  const { token, logout } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(res.data);
    };

    fetchProducts();
  }, [token]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Produtos
      </Typography>

      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          logout();
          navigate("/login");
        }}
        sx={{ mb: 2 }}
      >
        Logout
      </Button>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{ height: "100%", cursor: "pointer" }}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain", p: 2 }}
              />
              <CardContent>
                <Typography variant="h6" noWrap>
                  {product.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  R$ {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
