// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, nameString) {
	let result = drivers.filter(e => {
		return e.toLowerCase() == nameString.toLowerCase()
	})
	return result
}

function fuzzyMatch(drivers, subString) {
	let result = drivers.filter(e => {
		return e.startsWith(subString)
	})
	return result
}	

function matchName(drivers, justName) {
	let result = drivers.filter(e => {
		return e.name == justName
	})
	return result
}
