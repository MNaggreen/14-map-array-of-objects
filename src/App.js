import './App.css'
import Persons from './components/Persons'

/* const persons = [{ id:1, Name: 'Bogdan' }, { id:1, Name: 'Bogdan' }] */

/* добавляем обьект в массив */

function App() {
  return (
    <div className="App">
      <Persons />
    </div>
    /* тут мы принимаем уже готовый список из файла Persons который взял данные */
    /* из Person,js */
  )
}
/* выполняем итерацию по обьектам посредсвом точечной записи(по ключам) */
/* она рабоатает как цикл for i */
export default App
