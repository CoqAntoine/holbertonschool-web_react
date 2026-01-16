type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History
