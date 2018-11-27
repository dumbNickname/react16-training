import 'raf/polyfill';
import { createSerializer } from 'enzyme-to-json';
import { toMatchDiffSnapshot }from 'snapshot-diff';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';


expect.addSnapshotSerializer(createSerializer());
expect.extend({ toMatchDiffSnapshot });

configure({ adapter: new Adapter() });