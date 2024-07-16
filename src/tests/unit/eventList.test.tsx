/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor } from "@testing-library/react";
import EventList from "../../components/eventList";
import { getEvents } from "../../services/eventService";

jest.mock("../../services/eventService");

const mockEvents = [
  {
    id: "1",
    title: "Winter Wonderland Charity Ball",
    description: "A magical evening of dancing and festivity to raise funds for homeless shelters during the cold months.",
    date: "2024-12-10",
    location: "Crystal Palace Hotel",

  },
  {
    id: "2",
    title: "Movie Night Under the Stars",
    description: "Bring your blankets for an outdoor screening of classic films. Proceeds support community arts programs.",
    date: "2024-07-15",
    location: "Riverside Park",
  }
]

describe("EventList", () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: any) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      })
    });
  });

  it("renders events", async () => {
    (getEvents as jest.Mock).mockResolvedValue(mockEvents);

    render(<EventList />);

    await waitFor(() => {
      expect(screen.getByText("Winter Wonderland Charity Ball")).toBeInTheDocument();
      expect(screen.getByText("Movie Night Under the Stars")).toBeInTheDocument();
    })
  })

  it('displays error message on fetch failure', async () => {
    (getEvents as jest.Mock).mockRejectedValue(new Error('Fetch failed'));

    render(<EventList />);

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch events')).toBeInTheDocument();
    });
  });

})