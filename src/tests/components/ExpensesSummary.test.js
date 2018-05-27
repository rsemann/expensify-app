import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';

test('Should render view one expense', () => {
    const wrapper = shallow(<ExpensesSummary count={1} total={195}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render view two expenses', () => {
    const wrapepr = shallow(<ExpensesSummary count={2} total={109695}/>);
    expect(wrapepr).toMatchSnapshot();
});