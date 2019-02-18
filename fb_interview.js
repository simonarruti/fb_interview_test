// Given a list of people with their birth and death years, find the year with the highest population alive.

const data = [
  {birthyear: 1950, deathyear: 1970},
  {birthyear: 1955, deathyear: 1975},
  {birthyear: 1960, deathyear: 1980},
  {birthyear: 1965, deathyear: 1985},
  {birthyear: 1970, deathyear: 1990},
  {birthyear: 1975, deathyear: 1995},
  {birthyear: 1980, deathyear: 1999},
  {birthyear: 1985, deathyear: 2005},
  {birthyear: 1990, deathyear: 2010},
  {birthyear: 1995, deathyear: 2015},
  {birthyear: 1951, deathyear: 2001},
  {birthyear: 1952, deathyear: 2011},
  {birthyear: 1963, deathyear: 2012},
  {birthyear: 1962, deathyear: 2011},
  {birthyear: 1974, deathyear: 2005},
  {birthyear: 1979, deathyear: 2012},
  {birthyear: 1981, deathyear: 2017},
  {birthyear: 1982, deathyear: 2004},
  {birthyear: 1993, deathyear: 2006},
  {birthyear: 1999, deathyear: 2002},
  {birthyear: 1954, deathyear: 2001},
  {birthyear: 1958, deathyear: 2001},
  {birthyear: 1961, deathyear: 2007},
  {birthyear: 1968, deathyear: 2003},
  {birthyear: 1977, deathyear: 2001},
  {birthyear: 1977, deathyear: 2001},
  {birthyear: 1983, deathyear: 2001},
  {birthyear: 1982, deathyear: 2010},
  {birthyear: 1999, deathyear: 2010},
  {birthyear: 1990, deathyear: 2016},
]

const smallestBirthYear = Math.min(...data.map(element => element.birthyear))
const biggestDeathYear = Math.max(...data.map(element => element.deathyear))
const populationByYears = []

function addPeople (year) {
  const yearIndex = populationByYears.find(element => element.year === year)
  yearIndex !== undefined ? yearIndex.alive++ : populationByYears.push({year: year, alive: 1})
}

for (let element of data) {
  for (let i = smallestBirthYear; i <= biggestDeathYear; i++) {
    if (i >= element.birthyear && i <= element.deathyear) {
      addPeople(i)
    }
  }
}

const yearWithMostPeopleAlive = populationByYears.filter(element => element.alive === Math.max(...populationByYears.map(year => year.alive))).map(element => element.year)

//console.log(populationByYears)
console.log(yearWithMostPeopleAlive.lenght > 1 ? yearWithMostPeopleAlive : yearWithMostPeopleAlive.pop())
