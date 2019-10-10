import React from 'react'
import {sortByItemCount, sortByDate, sortByItemNames, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const nullObject = null;
		const result = sortByItemCount(nullObject, nullObject);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('orders are empty objects', () => {
		const order1 = {
			items: {}
		};
		const order2 = {
			items: {}
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('first array equal second', () => {
		const order1 = {
			items: ["a", "b"]
		};
		const order2 = {
			items: ["a", "b"]
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('first array less second', () => {
		const order1 = {
			items: ["a"]
		};
		const order2 = {
			items: ["a", "b"]
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(-1);
	});

	it('first array more second', () => {
		const order1 = {
			items: ["a", "b"]
		};
		const order2 = {
			items: ["b"]
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(1);
	});

});

describe('sortByDate function', () => {
	it('orders are numders', () => {
		const order1 = 1;
		const order2 = 1;
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders are null', () => {
		const order1 = null;
		const order2 = null;
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders are empty objects', () => {
		const order1 = {};
		const order2 = {};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('first order have erly ', () => {
		const order1 = {date: 8};
		const order2 = {date: 9};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(1);
	});

	it('first order equal second ', () => {
		const order1 = {date: 9};
		const order2 = {date: 9};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);	
	});

	it('second order have erly ', () => {
		const order1 = {date: 9};
		const order2 = {date: 8};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(-1);	
	});
});

describe('sortByItemNames function', () => {
	it('orders are numders', () => {
		const order1 = 1;
		const order2 = 1;
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders are null', () => {
		const order1 = null;
		const order2 = null;
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders are empty objects', () => {
		const order1 = {};
		const order2 = {};
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders are empty {items: null}', () => {
		const order1 = {items: null};
		const order2 = {items: null};
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});

	it('first order equal second', () => {
		const order1 = {items: ["a"]};
		const order2 = {items: ["a"]};
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});

	it('first order less second ', () => {
		const order1 = {items: ["a"]};
		const order2 = {items: ["b"]};
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(-1);
	});

	it('second order more erly ', () => {
		const order1 = {items: ["b"]};
		const order2 = {items: ["a"]};
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(1);
	});
});


describe('sortOrders function', () => {
	it('orders are null', () => {
		const order1 = {};
		const order2 = {};
		const result = sortOrders(order1, order2);
		expect(result).toBe(undefined);
	});

});
