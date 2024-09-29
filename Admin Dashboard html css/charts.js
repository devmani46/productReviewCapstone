// Data for Sentiment Breakdown
const sentimentData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [{
      data: [60, 25, 15], // Example values
      backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
      hoverBackgroundColor: ['#66bb6a', '#ffee58', '#e57373']
    }]
  };
  
  // Creating Sentiment Breakdown Chart
  const sentimentCtx = document.getElementById('sentimentChart').getContext('2d');
  const sentimentChart = new Chart(sentimentCtx, {
    type: 'pie',
    data: sentimentData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: getComputedStyle(document.body).getPropertyValue('--clr-dark')
          }
        }
      }
    }
  });
  
  // Data for Ratings Distribution
  const ratingData = {
    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    datasets: [{
      label: 'Number of Reviews',
      data: [20, 30, 50, 120, 130], // Example values
      backgroundColor: ['#f44336', '#ff9800', '#ffc107', '#4caf50', '#2196f3'],
      hoverBackgroundColor: ['#e57373', '#ffb74d', '#ffeb3b', '#66bb6a', '#42a5f5']
    }]
  };
  
  // Creating Ratings Distribution Chart
  const ratingCtx = document.getElementById('ratingChart').getContext('2d');
  const ratingChart = new Chart(ratingCtx, {
    type: 'bar',
    data: ratingData,
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--clr-dark')
          }
        },
        y: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--clr-dark')
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
  
  // Data for Customer Satisfaction (Assuming 5-point scale)
  const satisfactionData = {
    labels: ['Very Unsatisfied', 'Unsatisfied', 'Neutral', 'Satisfied', 'Very Satisfied'],
    datasets: [{
      label: 'Customer Satisfaction',
      data: [10, 20, 30, 80, 120], // Example values
      backgroundColor: ['#f44336', '#ff9800', '#ffc107', '#4caf50', '#2196f3'],
      hoverBackgroundColor: ['#e57373', '#ffb74d', '#ffeb3b', '#66bb6a', '#42a5f5']
    }]
  };
  
  // Creating Customer Satisfaction Chart
  const satisfactionCtx = document.getElementById('satisfactionChart').getContext('2d');
  const satisfactionChart = new Chart(satisfactionCtx, {
    type: 'bar',
    data: satisfactionData,
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--clr-dark')
          }
        },
        y: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--clr-dark')
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
  
  // Data for Review Frequency (Over a period of months, for example)
  const frequencyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Number of Reviews',
      data: [30, 40, 45, 50, 60, 70, 90, 85, 95, 100, 110, 120], // Example values
      backgroundColor: '#2196f3',
      borderColor: '#42a5f5',
      fill: true,
      tension: 0.1
    }]
  };
  
  // Creating Review Frequency Chart
  const frequencyCtx = document.getElementById('frequencyChart').getContext('2d');
  const frequencyChart = new Chart(frequencyCtx, {
    type: 'line',
    data: frequencyData,
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--clr-dark')
          }
        },
        y: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--clr-dark')
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: getComputedStyle(document.body).getPropertyValue('--clr-dark')
          }
        }
      }
    }
  });
  