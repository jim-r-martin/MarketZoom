import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';

configure({
  adapter: new Adapter(),
});

export { shallow, mount };
