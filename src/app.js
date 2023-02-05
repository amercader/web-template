import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const date = new Date()

// request a weekday along with a long date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const formatted_date = new Intl.DateTimeFormat('en', options).format(date)

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('date').innerHTML = formatted_date
})
