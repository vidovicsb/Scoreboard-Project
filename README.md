# Scoreboard Roster System

This React application allows you to manage team rosters and submit them to a JSON database.

## Features

- Add/remove players for each team
- Input player numbers and names
- Submit all rosters to database with a single button
- Automatic filtering of empty name fields
- Clean, maintainable React architecture

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Start the JSON server (in a separate terminal):
   ```bash
   npm run server
   ```

The JSON server will run on `http://localhost:3001` and watch the `data/db.json` file.

## How to Use

1. **Add Players**: Click "Add Player" to add new rows for each team
2. **Enter Data**: Fill in player numbers and names
3. **Submit**: Click "Submit All Rosters" when ready to submit both teams
4. **Data Filtering**: Empty name fields are automatically excluded from submission

## Data Structure

When you submit rosters, the data is sent to the database with this structure:

```json
{
  "teamName": "Home Team",
  "players": [
    {
      "number": 1,
      "name": "John Doe"
    }
  ]
}
```

## API Endpoints

- **POST** `/rosters` - Submit a team roster
- **GET** `/rosters` - Retrieve all submitted rosters

## Notes

- Empty name fields are automatically filtered out before submission
- Single submit button submits both team rosters at once
- The database file (`data/db.json`) is automatically updated when rosters are submitted
- You can view the submitted data by opening `data/db.json` or accessing `http://localhost:3001/rosters`
