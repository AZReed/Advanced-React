import PleaseSignin from '../components/PleaseSignin';
import OrderList from '../components/OrderList';

const OrdersPage = props => {
  console.log(props);
  return (
    <div>
      <PleaseSignin>
        <OrderList />
      </PleaseSignin>
    </div>
  );
};

export default OrdersPage;
