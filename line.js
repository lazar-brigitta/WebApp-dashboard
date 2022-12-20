const trafficCanvas = document.getElementById('traffic-chart');
let hourly = document.getElementsByClassName('hourly')[0];
let time = document.getElementById('time');

let trafficDataHourly = {
  labels: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
  datasets: [{
    data: [10, 20, 18, 30, 40, 23, 48, 14, 24, 45, 37],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficDataDaily = {
  labels: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [{
    data: [300, 123, 56, 178, 231, 456, 304, 489, 200, 167, 40],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficDataWeekly = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficDataMonthly = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
  datasets: [{
    data: [3003, 6700, 4500, 7689, 8000, 6508, 4003, 9054, 7600, 4500, 3409],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficOptions = {
  backgroundColor: 'rgba(112, 104, 201, .5)',
  fill: true,
  aspectRatio: 2,
  animation: {
    duration: 0
  },
  scales: {
    y: {
    beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficDataHourly,
  options: trafficOptions
});
hourly.className += ' selected';

// Change the line graph on click
time.addEventListener('click', (e) => {
  const timeChildren = time.children;
  for (let i = 0; i < timeChildren.length; i++) {
    timeChildren[i].children[0].classList.remove("selected");
  }
  if (e.target.className === 'daily') {
    e.target.className  += ' selected';
    trafficChart.destroy();
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficDataDaily,
        options: trafficOptions
    });
  } else if (e.target.className === 'weekly') {
    e.target.className  += ' selected';
    trafficChart.destroy();
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficDataWeekly,
        options: trafficOptions
    });
  } else if (e.target.className === 'monthly') {
    e.target.className  += ' selected';
    trafficChart.destroy();
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficDataMonthly,
        options: trafficOptions
    });
  } else {
    hourly.className  += ' selected';
    trafficChart.destroy();
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficDataHourly,
        options: trafficOptions
    });
  }
})