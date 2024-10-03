/*
Now that the teacher has all of the information they need, they want to be able to message the student with the results.
Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.
If the student passed the course, the string should follow this format:
Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
If the student failed the course, the string should follow this format:
Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
Replace average-goes-here with the average of the total scores. Replace grade-goes-here with the student's grade.
*/

function studentMsg(totalScores, studentScore) {
  let passOrFail = (hasPassingGrade(studentScore));
  if (passOrFail === true){
    return "Class average: "+ getAverage(totalScores) + ". Your grade: "+ getGrade(studentScore) + ". You passed the course."
  } else {
    return "Class average: "+ getAverage(totalScores) + ". Your grade: "+ getGrade(studentScore) + ". You failed the course."
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
