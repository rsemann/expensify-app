import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    return (
        <div>
            <p>{`Viewing ${props.count} expenses totalling ${numeral(props.total/1000).format("$0,0.00")}`}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const expenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        count: expenses.length,
        total: getExpensesTotal(expenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);