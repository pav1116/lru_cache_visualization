let capacity = 5;
let hits = 0;
let misses = 0;
let cache = new Map();
let lastHitKey = null;
// status typing control
let statusTypingTimer = null;
const statusTypingInterval = 30; // ms per character

function render() {
    document.getElementById('hits').innerText = hits;
    document.getElementById('misses').innerText = misses;
    
    const container = document.getElementById('cache-container');
    container.innerHTML = '';

    const keys = Array.from(cache.keys());
    
    keys.forEach((key, index) => {
        const div = document.createElement('div');
        div.className = 'cache-item';
        
        // Logic for Colors
        if (key === lastHitKey) {
            div.classList.add('item-hit'); // Green
        } else if (index === 0 && keys.length > 1) {
            div.classList.add('item-old'); // Red (LRU)
        } else {
            div.classList.add('item-standard'); // White/Blue
        }

        div.innerHTML = `<div>${key}</div><div>${cache.get(key)}</div>`;
        container.appendChild(div);
    });
}

function setStatus(msg, options = {}) {
    const el = document.getElementById('status-message');
    if (!el) return;

    // cancel any in-progress typing
    if (statusTypingTimer) {
        clearInterval(statusTypingTimer);
        statusTypingTimer = null;
    }
    el.classList.remove('typing');

    // fast path: clear
    if (!msg) {
        el.innerText = '';
        return;
    }

    // if instant requested, set immediately
    if (options.instant) {
        el.innerText = msg;
        return;
    }

    // start typing animation
    el.innerText = '';
    el.classList.add('typing');
    let i = 0;
    statusTypingTimer = setInterval(() => {
        i += 1;
        el.innerText = msg.slice(0, i);
        if (i >= msg.length) {
            clearInterval(statusTypingTimer);
            statusTypingTimer = null;
            // stop caret after complete
            el.classList.remove('typing');
        }
    }, statusTypingInterval);
}

function setCapacity() {
    const raw = document.getElementById('capacity-input').value;
    const parsed = parseInt(raw, 10);
    capacity = isNaN(parsed) ? 5 : parsed;
    cache.clear();
    hits = 0;
    misses = 0;
    lastHitKey = null;
    setStatus(`Capacity has been set to ${capacity}`);
    render();
}

function resetCache() {
    capacity = null;
    const capacityInput = document.getElementById('capacity-input');
    if (capacityInput) capacityInput.value = '';
    // Clear key and value input fields as part of reset
    const keyInput = document.getElementById('key-input');
    if (keyInput) keyInput.value = '';
    const valInput = document.getElementById('val-input');
    if (valInput) valInput.value = '';
    cache.clear();
    hits = 0;
    misses = 0;
    lastHitKey = null;
    setStatus("Capacity has been reset");
    render();
}

function handlePut() {
    const key = document.getElementById('key-input').value;
    const val = document.getElementById('val-input').value;
    if (!key || !val) return;

    lastHitKey = null; // Reset hit highlight on new put
    
    if (cache.has(key)) {
        cache.delete(key);
    } else if (cache.size >= capacity) {
        const oldest = cache.keys().next().value;
        cache.delete(oldest);
    }
    
    cache.set(key, val);
    setStatus("");
    render();
}

function handleGet() {
    const key = document.getElementById('key-input').value;
    if (!key) return;

    if (cache.has(key)) {
        hits++;
        lastHitKey = key; // Mark for green highlight
        const val = cache.get(key);
        cache.delete(key);
        cache.set(key, val);
        setStatus("HIT: Key found");
    } else {
        misses++;
        lastHitKey = null;
        setStatus("MISS: Key not found");
    }
    render();
}

render();