const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

// Load existing list from cookies on startup
window.onload = () => {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));
    
    if (todoCookie) {
        const tasks = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
        // Reverse so the last saved item (top of list) is added correctly
        tasks.reverse().forEach(text => addTask(text, false));
    }
};

// Event listener for the "New" button
newBtn.addEventListener('click', () => {
    const taskText = prompt("What do you need to do?");
    if (taskText && taskText.trim() !== "") {
        addTask(taskText, true);
    }
});

function addTask(text, shouldSave) {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.textContent = text;

    // Remove item on click
    div.addEventListener('click', () => {
        if (confirm("Do you really want to remove this TO DO?")) {
            div.remove();
            saveToCookies();
        }
    });

    // Requirement: New items must appear at the top
    ftList.prepend(div);

    if (shouldSave) {
        saveToCookies();
    }
}

function saveToCookies() {
    const tasks = [];
    const items = ftList.querySelectorAll('.todo-item');
    
    items.forEach(item => {
        tasks.push(item.textContent);
    });

    // Set cookie that expires in 7 days
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(tasks)) + ";" + expires + ";path=/";
}