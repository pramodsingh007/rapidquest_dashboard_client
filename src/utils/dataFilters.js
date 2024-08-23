// src/utils/dataFilters.js
export const filterDataByInterval = (data, interval) => {
    switch (interval) {
      case 'all':
        return data; 
      case 'daily':
        return data; 
      case 'monthly':
        return aggregateData(data, 'month');
      case 'quarterly':
        return aggregateData(data, 'quarter');
      case 'yearly':
        return aggregateData(data, 'year');
      default:
        return data;
    }
  };
  
  const aggregateData = (data, type) => {
    const groupedData = {};
    data.forEach((item) => {
      const date = new Date(item.date);
      let key;
  
      switch (type) {
        case 'month':
          key = `${date.getFullYear()}-${date.getMonth() + 1}`;
          break;
        case 'quarter':
          key = `${date.getFullYear()}-Q${Math.floor(date.getMonth() / 3) + 1}`;
          break;
        case 'year':
          key = date.getFullYear();
          break;
        default:
          return;
      }
  
      if (!groupedData[key]) {
        groupedData[key] = { ...item, date: key };
      } else {
        groupedData[key].totalSales += item.totalSales || 0;
        groupedData[key].growthRate += item.growthRate || 0;
        groupedData[key].newCustomers += item.newCustomers || 0;
        groupedData[key].repeatCustomers += item.repeatCustomers || 0;
        groupedData[key].lifetimeValue += item.lifetimeValue || 0;
      }
    });
  
    return Object.values(groupedData);
  };
  