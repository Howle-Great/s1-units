import React from 'react'
import {getDate} from './getDate';

describe('getDate function', () => {
	it('orders are null', () => {
		const result = getDate(99999999);
		expect(result).toEqual("2 января, пт, 1970 год");
	});

});