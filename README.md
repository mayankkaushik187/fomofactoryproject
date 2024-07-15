# CoinXO - Real-Time Cryptocurrency Prices

CoinXO is a web application that provides real-time price data for five different cryptocurrencies. The application uses Next.js, TypeScript, Redux, and TailwindCSS to create a responsive and dynamic user interface.

## Features

- Display real-time price data for Bitcoin, Ethereum, Tether, Binance Coin, and Solana.
- Data stored in MongoDB and fetched every few seconds to ensure real-time updates.
- Buttons to change the cryptocurrency.

## Screenshots

### Bitcoin
<img width="1440" alt="Screenshot 2024-07-15 at 10 51 17 PM" src="https://github.com/user-attachments/assets/a073bbbc-33ff-4837-bd40-e38ee92fd4a9">


### Ethereum
<img width="1440" alt="Screenshot 2024-07-15 at 10 51 30 PM" src="https://github.com/user-attachments/assets/a6768218-08d9-47a8-9384-23d519597c75">

### Tether
<img width="1440" alt="Screenshot 2024-07-15 at 10 51 55 PM" src="https://github.com/user-attachments/assets/c1ce3a96-41bb-4bc5-9d4f-a4cc31e3ff97">

### Binance Coin
<img width="1440" alt="Screenshot 2024-07-15 at 10 51 59 PM" src="https://github.com/user-attachments/assets/19068e3e-35b4-4464-b74a-57f08bbd15af">

### Solana
<img width="1440" alt="Screenshot 2024-07-15 at 10 52 02 PM" src="https://github.com/user-attachments/assets/bdc11736-50ed-41cc-bae1-c8d788a04a27">

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Typed JavaScript for better code quality and development experience.
- **Redux**: State management library to handle application state.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **MongoDB**: NoSQL database to store and fetch real-time data.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v12 or later)
- npm (v6 or later)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/coinxo.git
   cd coinxo
   ```
3. Create a .env file in the /backend directory and add the following environment variables:
  ```env
  NEXT_PUBLIC_API_URL=<Your_CoinGecko_API_Endpoint>
  MONGODB_URI=<Your_MongoDB_Connection_String>
  ```
4. Run the backend development server:
  ```bash
  cd backend
  npm install
  npm start
  ```
5. Run the frontend development server:
  ```bash
  cd ..
  cd frontend
  npm install
  npm run dev
  ```
Open ```http://localhost:3000``` in your browser to see the application running.

### Usage
- Click on the cryptocurrency buttons (Bitcoin, Ethereum, Tether, Binance Coin, Solana) to view real-time price data.
- Use the "Change" button to open the modal and select a different cryptocurrency.
- The table will display the 20 most recent price entries along with other details such as the image, name, lowest price in 24 hours, highest price in 24 hours, and timestamp.

[Next.js](https://nextjs.org/)
[TypeScript](https://www.typescriptlang.org/)
[Redux](https://redux.js.org/)
[TailwindCSS](https://tailwindcss.com/)
[CoinGecko](https://www.coingecko.com/)
[MongoDB](https://www.mongodb.com/)
