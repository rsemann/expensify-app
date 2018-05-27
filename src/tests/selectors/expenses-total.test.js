import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const expensesTotal = getExpensesTotal();
    expect(expensesTotal).toBe(0);
});

test('Should correctly added up a single expense', () => {
    const expensesTotal = getExpensesTotal([expenses[0]]);
    expect(expensesTotal).toBe(expenses[0].amount);
});

test('Should correctly added up multiple expenses', () => {
    const expensesTotal = getExpensesTotal(expenses);
    expect(expensesTotal).toBe(114195);
});