test("renders current temperature and weather information", async () => {
  // Mock API response
  axiosInstance.get.mockResolvedValueOnce({
    data: {
      results: {
        temp: 25,
        description: "Sunny",
        rain: 10,
        humidity: 60,
        wind_speedy: "10 km/h",
      },
    },
  });

  // Render App component
  const { getByText } = render(<App />);

  // Wait for API call to resolve and component to update
  await waitFor(() => {
    // Assert that temperature, weather description, and weather details are rendered
    expect(getByText("25")).toBeDefined();
    expect(getByText("Sunny")).toBeDefined();
    expect(getByText("Max: 26 ° Min: 16 °")).toBeDefined();
    expect(getByText("10%")).toBeDefined();
    expect(getByText("60%")).toBeDefined();
    expect(getByText("10 km/h")).toBeDefined();
  });

  // Assert that axiosInstance.get was called with the correct endpoint
  expect(axiosInstance.get).toHaveBeenCalledWith("weather");
});

test("calls axiosInstance.get with the correct endpoint", async () => {
  // Mock API response
  axiosInstance.get.mockResolvedValueOnce({
    data: {
      results: {
        temp: 25,
        description: "Sunny",
        rain: 10,
        humidity: 60,
        wind_speedy: "10 km/h",
      },
    },
  });

  // Render App component
  render(<App />);

  // Wait for API call to resolve
  await waitFor(() => {
    // Assert that axiosInstance.get was called with the correct endpoint
    expect(axiosInstance.get).toHaveBeenCalledWith("weather");
  });
});

test("handles axiosInstance.get error", async () => {
  // Mock API error
  axiosInstance.get.mockRejectedValueOnce(new Error("Network Error"));

  // Render App component
  const { getByText } = render(<App />);

  // Wait for API call to reject and error message to render
  await waitFor(() => {
    // Assert that error message is rendered
    expect(getByText("Error: Network Error")).toBeDefined();
  });
});