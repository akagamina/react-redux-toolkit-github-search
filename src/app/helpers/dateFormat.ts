export const dateFormat = (date: string | number | Date) => {
    const time = new Date(date);
    const day = time.getDate();
    const formattedDay = `${day}`.length === 1 ? `0${day}` : day;
    const month = time.getMonth() + 1;
    const formattedMonth = `${month}`.length === 1 ? `0${month}` : month;
    const year = time.getFullYear();
  
    const formattedDate = `${formattedDay}/${formattedMonth}/${year} `;
  
    return formattedDate;
  };
  