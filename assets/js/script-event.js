const eventListData = [
  {
    title: "Advent",
    date: "2024-12-22",
    description: "Poděbrady Advent program... ",
    time: "2:00am/10:00am - 6:00pm",
    location: "@Various locations",
    link: "/assets/images/events/Advent.jpg",
  },
  {
    title: "Christmas concert",
    date: "2024-12-13",
    description: "Ticket costs 250kč...",
    time: "Starts at 7:00pm",
    location: "@City theater",
    link: "/assets/images/events/ChristmasConcert.png",
  },
  {
    title: "Christmas dream",
    date: "2024-12-20",
    description: "Christmas carol concert...",
    time: "Starts at 6:00pm",
    location: "@City theater",
    link: "/assets/images/events/ChristmasDream.jpg",
  },
  {
    title: "Christmas for youth",
    date: "2024-12-20",
    description: "Teens and young adults...",
    time: "Starts at 1:00pm",
    location: "@T-Club",
    link: "/assets/images/events/ChristmasForYoungAdults.png",
  },
  {
    title: "Chirstmas with Mameluk",
    date: "2024-12-08",
    description: "Rock, pop songs by Mameluk...",
    time: "Starts at 2:00pm",
    location: "@Colonnade",
    link: "/assets/images/events/Mamulek.png",
  },
  {
    title: "Chirstmas with Saxharem",
    date: "2024-12-08",
    description: "Saxophone quartet Saxharem...",
    time: "Starts at 7:00pm",
    location: "@Havířský kostelík",
    link: "/assets/images/events/Saxharem.jpg",
  },
  {
    title: "Workshop for kids",
    date: "2024-12-16",
    description: "Bring your kids to ...",
    time: "Starts at 3:30pm",
    location: "@City library",
    link: "/assets/images/events/WorkshopForChildren.png",
  },
];

let currentEventPage = 1;
let eventsPerPage = 4;

// Adjust items per page based on screen size
if (window.innerWidth >= 1200) {
  eventsPerPage = 10;
} else if (window.innerWidth >= 700) {
  eventsPerPage = 6;
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    eventsPerPage = 10;
  } else if (window.innerWidth >= 700) {
    eventsPerPage = 6;
  } else {
    eventsPerPage = 4;
  }
  currentEventPage = 1; // Reset to page 1 when screen size changes
  renderEvents();
});

function renderEvents() {
  const startIndex = (currentEventPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const eventsToDisplay = eventListData.slice(startIndex, endIndex);

  const itemContainer = document.getElementById("item-container");
  itemContainer.innerHTML = "";

  eventsToDisplay.forEach((event) => {
    const eventHTML = `
        <article class="event-container">
          <div class="container-event-date-month">
            <p class="event-date">${new Date(event.date).getDate()}</p>
            <p class="event-month">${new Date(event.date).toLocaleString(
              "en-US",
              {
                month: "long",
              }
            )}</p>
          </div>
          <div class="margin-top-15">
            <a href="${event.link}" target="_blank"><h3>${event.title}</h3></a>
            <p>${event.description}</p>
          </div>
          <div>
            <p class="margin-bottom-0">${event.time}</p>
            <p class="margin-bottom-0">${event.location}</p>
          </div>
        </article>
      `;
    itemContainer.innerHTML += eventHTML;
  });

  const pageNumber = document.getElementById("page-number");
  pageNumber.textContent = `Page ${currentEventPage} of ${Math.ceil(
    eventListData.length / eventsPerPage
  )}`;
}

function changePage(direction) {
  const totalPages = Math.ceil(eventListData.length / eventsPerPage);
  if (direction === "prev" && currentEventPage > 1) {
    currentEventPage--;
  } else if (direction === "next" && currentEventPage < totalPages) {
    currentEventPage++;
  }
  renderEvents();
}

// Initial render
renderEvents();
