/**
 * Author: Mark Procopio
 * Revised: July 7, 2022
 * @brief digital School catalogue class
 * @details Primary and High school classes inheriting from School class. 
 * @details The Department of Education wants the catalog to hold quick reference material for each school in the city.
 */

class School {
  constructor(name,level,numOfStudents){
    this._name = name
    this._level = level
    this._numOfStudents = numOfStudents
  }
  get name(){
    return this._name
  }
  get level(){
    return this._level
  }
  get numOfStudents(){
    return this._numOfStudents
  }
  set numOfStudents(number){
    if (typeof(number) != Number){
      return 'Invalid input: numberOfStudents must be set to a Number.'
    }
    else{
      this._numOfStudents = number;
    }
  }
  quickFacts(){
    console.log(`${this._name} educates ${this._numOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers){
    let ranNum = Math.floor(Math.random() * (substituteTeachers.length -1));
    console.log(substituteTeachers[ranNum]);
  }
}

class PrimarySchool extends School{
  constructor(name,numOfStudents,pickupPolicy){
    super(name,'primary',numOfStudents)
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class HighSchool extends School{
  constructor(name,numOfStudents,sportsTeams){
    super(name,'highSchool',numOfStudents)
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    console.log(this._sportsTeams);
  }
}

//create new Primary School instance 
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts()
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

//create new High School instance 
const alSmith = new HighSchool('Al E. Smith',415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.sportsTeams

