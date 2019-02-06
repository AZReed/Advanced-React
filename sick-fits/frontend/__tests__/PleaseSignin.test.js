import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import PleaseSignin from '../components/PleaseSignin';
import { CURRENT_USER_QUERY } from '../components/User';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeItem, fakeUser } from '../lib/testUtils';

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } }
  }
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } }
  }
];

describe('<PleaseSignin/>', () => {
  it('renders the sign in dialog to logged out users', async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignin />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect( wrapper.text() ).toContain('Please Sign In before Continuing');
    expect(wrapper.find('Signin').exists()).toBe(true);
  });

  it('renders the child component when the user is signed in', async () => {
    const Child = () => <p>Child Component</p>
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignin>
          <Child />
        </PleaseSignin>
      </MockedProvider>
    );

    await wait();
    wrapper.update();
    expect(wrapper.contains(<Child />)).toBe(true);
  });

});
