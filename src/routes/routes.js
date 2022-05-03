import Products from '../components/screens/Products/Products';
import Checkout from '../components/screens/Checkout/Checkout';
import AboutUs from '../components/screens/AboutUs/AboutUs';

const NoMatch = () => {
	return <div>404</div>;
};

export const ROUTES = [
	{
		path: '/checkout',
		exact: true,
		component: Checkout
	},
	{
		path: '/',
		exact: true,
		component: Products
	},
	{
		path: '*',
		exact: true,
		component: NoMatch
	},
	{
		path: '/aboutus',
		exact: true,
		component: AboutUs
	}
];
