function Person(props) {
  /* тут мы принимаем свойства из файла Persons.js */
  const { firstName, lastName, email, img } = props
  /* декструтуризация для отображения каждого компонет отдельно*/
  return (
    
    <div className='card'>
      <img src={img} alt="pesonPhoto" />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
    
  )
  /* тут мы отправляем наш шаблон который будет заполнять при помощи метода Map */
}

export default Person
