import { Router } from "express";
import { cartManager } from "../managers/cart.manager.js";
const router = Router();

router.post("/", async (req, res) => {
  try {
    res.json(await cartManager.createCart());
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/:idCart", async (req, res) => {
  try {
    const { idCart } = req.params;
    res.json(await cartManager.getCartById(idCart));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/:idCart/product/:idProd", async (req, res) => {
  
  try {
    const { idProd } = req.params;
    const { idCart } = req.params;
    const response = await cartManager.saveProdToCart(idCart, idProd);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;