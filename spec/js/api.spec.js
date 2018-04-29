describe('canary', function() {
	it('should run a test', function() {
		expect(true).toBe(true)
	})
})

describe('jDonny API', function() {
	describe('jDonny()', function() {
		it('should return a single element when only one exists on the page', function() {
			const underTest = jDonny('body').element
			const expected = document.body

			expect(underTest).toBe(expected)
		})
		it('should return multiple elements when many exist on the page', function() {
			const underTest = jDonny('#testList li').element
			const expected = document.querySelectorAll('#testList li')

			expect(underTest[1]).toBe(expected[1])
			expect(underTest[3]).toBe(expected[3])
			expect(underTest[underTest.length - 1]).toBe(
				expected[expected.length - 1],
			)
		})
	})
})
