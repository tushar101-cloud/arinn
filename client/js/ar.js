// Function to add markers dynamically
function addMarker(markerId, modelUrl, position, rotation, scale) {
    // Create a new marker element
    const marker = document.createElement('a-marker');

    // Set the marker type and ID
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('url', `assets/markers/${markerId}.patt`);

    // Create a 3D model element or any other element
    const model = document.createElement('a-entity');
    model.setAttribute('gltf-model', modelUrl);
    model.setAttribute('position', position);
    model.setAttribute('rotation', rotation);
    model.setAttribute('scale', scale);

    // Append the model to the marker
    marker.appendChild(model);

    // Add the marker to the scene
    document.querySelector('a-scene').appendChild(marker);
}

// Example usage of the function
addMarker(
    'example-marker', // ID of the marker pattern file (without .patt extension)
    'assets/models/example-model.glb', // URL to the 3D model file
    '0 0 0', // Position
    '0 0 0', // Rotation
    '0.5 0.5 0.5' // Scale
);
