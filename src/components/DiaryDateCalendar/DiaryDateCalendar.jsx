import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { updateDate } from '../../redux/app/diaryPerDay/diaryPerDay-slice';
// import updateDate from '../../redux/app/diaryPerDay/diaryPerDay-slice';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { DatePickerWrapper } from './DiaryDateCalendar.styled';
import CalendarBtn from '../CalendarBtn/CalendarBtn';
import { diarySelectors, updateDate } from 'redux/app/diaryPerDay';

function dateToString(date) {
  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');

  return day + '.' + month + '.' + year;
}

export default function DiaryDateCalendar() {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const currentDate = useSelector(diarySelectors.getCurrentDate);
  const [date, setDate] = useState(currentDate);

  let inputProps = {
    value: date,
    disabled: true,
    style: {
      border: 'none',
      fontSize: '34px',
      width: '230px',
    },
  };

  function valid(current) {
    let today = new Date();
    return current.isBefore(today);
  }

  function changeDate(evt) {
    const dateString = dateToString(evt._d);
    setDate(dateString);
    console.log(dateString);

    console.log(updateDate);

    dispatch(updateDate(dateString));
  }

  function openCalendar() {
    setIsShow(!isShow);
  }

  return (
    <DatePickerWrapper>
      <Datetime
        inputProps={inputProps} // настройки
        timeFormat={false} // отключение отображения часов
        dateFormat="DD.MM.YYYY" // формат даты
        isValidDate={valid} // блокируем будущее
        onChange={changeDate} // отслеживаем изменения даты
        open={isShow} // отображение календаря !!!
      />

      <CalendarBtn onHandleClick={openCalendar} />
    </DatePickerWrapper>
  );
}
