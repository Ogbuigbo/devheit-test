# Micro-Influx Dashboard

## Project Overview

**Micro-Influx Dashboard** is an interactive campaign management tool tailored for influencers and brands. It allows users to create and manage campaigns across multiple channels, while also offering features such as notifications, messaging, and campaign shortcuts. The dashboard is designed to be intuitive, responsive, and easy to use for both mobile and desktop users.

## Key Features

1. **Campaign Creation Modal**
   - A form modal is available for creating new campaigns.
   - Users can fill in details such as campaign title, brand name, category, description, budget, and preferred social media channels (Facebook, TikTok, Instagram, YouTube, Twitter).
   - The form also features basic validation for required fields.

2. **Campaign Shortcuts**
   - The sidebar features a "Campaign Shortcuts" section for quick access to recent or important campaigns.
   - Users can view the title and thumbnail of each campaign in this section and can click on a campaign to see more details.

3. **Responsive Layout**
   - The application features a responsive sidebar that appears as a toggleable menu on mobile devices and remains static on desktop screens.
   - The layout adjusts depending on the screen size, ensuring the dashboard is usable on both small and large devices.

4. **Dashboard**
   - Displays an overview of the campaigns created by the user.
   - The "Dashboard" also features buttons to create new campaigns, access messages, and view notifications.

5. **Campaign Overview**
   - The overview component provides a summary of active campaigns.
   - Users can see details of campaigns such as budget, title, description, and status.

6. **Notification and Messaging**
   - Icons for notifications and messages are present in the dashboard header for easy access to important updates and communications.

7. **Ant Design Integration**
   - The project uses Ant Design components like `Modal`, `Menu`, `Select`, and icons from Ant Design's library to enhance the user interface and improve functionality.

## File Structure

### Components
- `Dashboard.js`: This component is the main dashboard page, which contains buttons for creating new campaigns and viewing messages/notifications.
- `Form.js`: The form used to create a new campaign. This includes fields for title, brand name, category, description, budget, and channel selection.
- `AppLayout.js`: The main layout of the application, which includes the sidebar, content area, and the campaign shortcuts.
- `CampaignDetails.js`: This component is responsible for displaying details of a campaign.
- `Overview.js`: Displays an overview of active campaigns.
- `Mobile.js`: Contains functionality specific to the mobile view of the sidebar.

### Assets
- **Icons**: Custom SVG icons for different features like `Plus`, `Notification`, and social media platforms (Facebook, Instagram, YouTube, etc.).

### Context
- `FormDataContext.js`: Manages the global state for campaign data using React's `useContext` and `useState`.

## How It Works

1. **Campaign Creation**: Users can create a new campaign by clicking the "Create a New Campaign" button, which opens a modal form. Once the form is submitted, the campaign is added to the campaign list and the modal closes.
   
2. **Campaign Shortcuts**: Campaigns are displayed in the sidebar with truncated titles for easier navigation. These can be clicked to display full details.
   
3. **Mobile Support**: The sidebar and layout are responsive, with a hamburger menu to toggle the sidebar on mobile devices.
   
4. **Ant Design Modal**: Campaign creation and viewing happen inside modals to provide a clean, distraction-free interface.

## Technologies Used

- **React.js**: For building the user interface components.
- **Ant Design**: For pre-built UI components like `Modal`, `Select`, and `Menu`.
- **CSS (TailwindCSS)**: For styling and layout, ensuring a responsive design.
- **SVG**: Custom icons for social media platforms and dashboard actions.

## Getting Started

### Prerequisites
- **Node.js**
- **NPM** (or Yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ogbuigbo/micro-influx-dashboard.git

2. Install dependencies:
    npm install

3. Start the development server:
    npm start