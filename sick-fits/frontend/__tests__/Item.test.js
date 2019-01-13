import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool Item',
  price: 4000,
  description: 'This item is really cool!',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg'
};

describe('<Item />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
/*   it('renders pricetag and title', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const priceTag = wrapper.find('PriceTag');
    expect(priceTag.children().text()).toBe('$50');
    expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
  });

  it('renders image properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(fakeItem.image);
    expect(img.prop('alt')).toBe(fakeItem.title);
  });

  it('renders out the buttons', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const buttonList = wrapper.find('.buttonList');
    expect(buttonList.children()).toHaveLength(3);
    expect(buttonList.find('Link').exists()).toBeTruthy();
    expect(buttonList.find('DeleteItem').exists()).toBeTruthy();
  }); */
});
