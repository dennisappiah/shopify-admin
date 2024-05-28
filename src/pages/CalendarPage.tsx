import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import Grid from "@mui/material/Unstable_Grid2";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate, DateSelectArg, EventClickArg } from "@fullcalendar/core";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { colorTokens } from "../color";
import Header from "../components/resuables/home/Header";

// Define the type for your event objects
interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  allDay: boolean;
}

const Calendar = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<CalendarEvent[]>([]);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent: CalendarEvent = {
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };
      calendarApi.addEvent(newEvent);
      setCurrentEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
      setCurrentEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== selected.event.id)
      );
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subTitle="Full Calendar Interactive Page" />
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Box
            sx={{ backgroundColor: colors.primary[400] }}
            p="15px"
            borderRadius="4px"
          >
            <Typography variant="h5">Events</Typography>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid xs={12} md={8}>
          <Box ml="15px">
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) =>
                setCurrentEvents(
                  events.map((event: any) => ({
                    id: event.id,
                    title: event.title,
                    start: event.startStr,
                    end: event.endStr,
                    allDay: event.allDay,
                  }))
                )
              }
              initialEvents={[
                {
                  id: "12315",
                  title: "All-day event",
                  start: "2022-09-14",
                  allDay: true,
                },
                {
                  id: "5123",
                  title: "Timed event",
                  start: "2022-09-28T10:00:00",
                  allDay: false,
                },
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calendar;
