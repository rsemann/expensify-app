import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';

test('Should render view one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} total={expenses[0].amount}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render view two expenses', () => {
    const wrapepr = shallow(<ExpensesSummary expenses={[expenses[0], expenses[1]]} total={expenses[0].amount + expenses[1].amount}/>);
    expect(wrapepr).toMatchSnapshot();
});