import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/Ri";
import { IoIosArrowBack } from "react-icons/Io";
import CartItem from "../cartItem/CartItem.tsx";
import { clearCart } from "../../../redux/slices/cartSlice.ts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store.ts";
import { TcartItem } from "../../../redux/slices/cartSlice.ts";



const Cart: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const { items, totalPrice, totalCount } = useSelector((state: RootState) => state.cartSlice);

	function handleClearCart(): void {
		if (confirm("CLEAR CART?")) {
			dispatch(clearCart());
		}
	}

	return (
		<>
			<div className="cart">
				{items.map((pizza: TcartItem) => {
					return <CartItem key={crypto.randomUUID()} info={pizza} />;
				})}

				<div className="cartMid">
					<div>
						<p>Total count: {totalCount}</p>
						<p>Total price: {totalPrice}</p>
					</div>
					<button type="button" onClick={handleClearCart}>
						<RiDeleteBinLine />
						Clear cart
					</button>
				</div>

				<div className="cartBottom">
					<Link to="/">
						<button type="button">
							<IoIosArrowBack />
							Back
						</button>
					</Link>
					<button type="button">Order Now</button>
				</div>
			</div>
		</>
	);
};

export default Cart;
