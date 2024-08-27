# Admin Dashboard

This is a responsive Admin Dashboard created using Tailwind CSS and JavaScript. The dashboard provides a user-friendly interface with a sidebar, header, and main content area for managing various tasks and projects. The project is styled using Tailwind CSS, with custom styling and icons from FontAwesome.

## Features

- **Responsive Design**: The layout is fully responsive, adapting to different screen sizes including mobile, tablet, and desktop.
- **Sidebar Navigation**: Includes links to Home, Profile, Messages, History, Tasks, Communities, Settings, Support, and Privacy sections.
- **Header**: Contains a search bar, notifications, user profile with options, and quick access buttons for Profile, Settings, and Messages.
- **Main Content Area**: Displays user projects with links to view and manage each project.
- **Custom Styling**: Uses Tailwind CSS for easy customization and responsiveness, along with some custom CSS for specific needs.

## To-DO
- **Theme Switcher**: To toggle light and dark mode
- **Sticky sidebar**: To add a sticky sidebar on scroll
- **Mobile responsiveness**: To fix issues on mobile devices

## Screenshots

![Dashboard Screenshot](./imgs/dashboard.jpg)

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/thedividedorange/Admin-Dashboard.git
    cd Admin-Dashboard
    ```

2. **Install Dependencies**:
    Ensure you have [Node.js](https://nodejs.org/) installed. Then, install Tailwind CSS and other dependencies:
    ```bash
    npm install
    ```

3. **Build Tailwind CSS**:
    If using a custom build process:
    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```

4. **Run the Project**:
    Open `index.html` in your browser to view the dashboard.

## Usage

- **Customizing**: Modify the `tailwind.config.js` file and custom CSS in `output.css` for styling changes.
- **JavaScript**: The project uses `app.js` for interactive features like showing and hiding the textbox on the image. Update or expand this file to add new functionality.
- **Icons**: FontAwesome icons are used throughout the dashboard. Customize icons by changing the `class` names in the HTML.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the dashboard.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [FontAwesome](https://fontawesome.com/)
- [The Odin Project](https://www.theodinproject.com/) for project inspiration.
