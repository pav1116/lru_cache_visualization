# lru-cache-visualizer



An interactive web-based visualization of the **Least Recently Used (LRU) Cache** data structure. This project provides a hands-on way to understand how LRU caches work through a clean, intuitive user interface.

## 📋 Overview

An LRU Cache is a data structure that stores a limited number of items. When the cache reaches its capacity and a new item needs to be added, the least recently used item is removed. This visualization makes it easy to see these operations in real-time.

## ✨ Features

- **Dynamic Capacity Setting**: Set the cache capacity to any value
- **PUT Operation**: Add or update key-value pairs in the cache
- **GET Operation**: Retrieve values and observe hit/miss statistics
- **Real-time Visualization**: Watch cache items update dynamically
- **Hit/Miss Tracking**: Monitor cache performance with hit and miss counters
- **Color-coded Display**:
  - 🟢 Green: Most Recently Used (MRU) item
  - 🔴 Red: Least Recently Used (LRU) item
  - 🔵 Blue: Standard cache items
- **Legend**: Clear indication of LRU → MRU ordering
- **Responsive Design**: Works on various screen sizes

## 🚀 How to Use

### Option 1: GitHub Pages
Visit the live demo at: [GitHub Pages Link] (if enabled)

### Option 2: Local Development
1. Clone the repository
2. Open `index.html` in your web browser
3. Or use a local development server:
   ```bash
   python -m http.server 8000
   # Then navigate to http://localhost:8000
   ```

### Option 3: VS Code Live Server
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click on `index.html` and select "Open with Live Server"

## 📖 Usage Guide

### Setting Capacity
1. Enter a number in the **Capacity** field (e.g., 5)
2. Click the **Set** button to initialize the cache

### Adding Items (PUT)
1. Enter a **Key** and **Value**
2. Click **PUT** to add/update the item
3. If the cache is full, the least recently used item will be removed

### Retrieving Items (GET)
1. Enter a **Key**
2. Click **GET** to retrieve the value
3. A **HIT** indicates the key was found (and becomes the MRU)
4. A **MISS** indicates the key was not found

### Resetting
- Click **Reset** to clear the cache and reset all statistics

## 🏗️ Project Structure

```
LRU_Cache_Visualization/
├── index.html      # Main HTML file with UI structure
├── style.css       # Styling and layout
├── script.js       # Cache logic and visualization
└── README.md       # This file
```

## 📁 File Descriptions

### index.html
- Contains the HTML structure for the user interface
- Includes:
  - Capacity input and control buttons
  - Key-value input fields
  - PUT and GET action buttons
  - Cache visualization container
  - Hit/Miss statistics display

### style.css
- Comprehensive styling for all UI elements
- Responsive design with flexbox layout
- Color scheme for cache items (green, red, blue)
- Animations and hover effects

### script.js
- LRU Cache implementation using JavaScript Map
- Key functions:
  - `setCapacity()`: Sets the cache capacity
  - `handlePut()`: Adds or updates cache items
  - `handleGet()`: Retrieves items and updates MRU position
  - `render()`: Updates the visual display
  - `setStatus()`: Displays messages with typing animation
  - `resetCache()`: Clears all data and resets statistics

## 🎯 LRU Cache Algorithm

The visualization implements a standard LRU cache with the following behavior:

1. **PUT(key, value)**:
   - If key exists: Move it to the end (most recent)
   - If key doesn't exist and cache is full: Remove the oldest (first) item
   - Add the new item to the end

2. **GET(key)**:
   - If key exists: Move it to the end and increment hit counter
   - If key doesn't exist: Increment miss counter

3. **Order**: Items are stored in order from Least Recently Used (oldest) to Most Recently Used (newest)

## 📊 Statistics

The visualization tracks:
- **Hits**: Number of successful GET operations
- **Misses**: Number of unsuccessful GET operations

## 🎨 Color Coding

- **🟢 Green**: The item that was just accessed (MRU)
- **🔴 Red**: The oldest item in the cache (LRU)
- **🔵 Blue**: Regular cache items

## 💡 Learning Outcomes

By using this visualization, you'll understand:
- How LRU caches maintain ordering
- The eviction policy when capacity is exceeded
- Real-world applications of LRU caches (CPU caches, database buffers, etc.)
- Performance metrics (hits vs. misses)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Styling and animations
- **JavaScript (ES6+)**: Cache implementation and DOM manipulation

## 📸 Screenshots

The project includes example screenshots showing:
- Initial empty cache
- Cache with various items
- Hit/miss scenarios
- Eviction in action

## 📝 Example Workflow

1. Set capacity to 3
2. PUT key="A", value="10"
3. PUT key="B", value="20"
4. PUT key="C", value="30"
5. GET key="A" (becomes MRU)
6. PUT key="D", value="40" (B is evicted as LRU)
7. Observe the visualization update in real-time

## 🔗 Related Concepts

- **Cache Replacement Policies**: LRU, LFU, FIFO
- **Time Complexity**: O(1) for both GET and PUT
- **Space Complexity**: O(capacity)
- **Use Cases**: CPU L1/L2 caches, database query caching, web caching

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created by [@pav1116](https://github.com/pav1116)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

---

**Happy Learning!** 🚀 Explore and understand LRU caches through interactive visualization.
