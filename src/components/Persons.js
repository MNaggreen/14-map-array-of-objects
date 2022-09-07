import persons from '../data/persons'
import Person from './Person'

function Persons() {
  return (
    
    <div className="cards">
      {persons.map((persons) => {
        /* тут мы принимаем список из persons.js */

        /* const { id, firstName, lastName, email, img } = person */
        /* делаем деструктуризацию для сокразения записи person.firstName */
        /* ключ нужен чтобы реакт знал что оставить без изменений а что перерисовать */
        return <Person key={persons.id} {...persons} />
        /* тут мы передаем свойства в файл Person.js */
        /* и заполняем наш шаблон из файла Person */
      })}
    </div>
    
    /* импортируем список с ключом id и все остальное и передаем person свойство*/
  )
}

export default Persons
