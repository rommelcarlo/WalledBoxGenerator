function createWalledBox() {
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const thickness = document.getElementById('thickness').value;

    if (length > 0 && width > 0 && height > 0 && thickness > 0) {
        const outerBox = FormIt.Creation.CreateBox([0, 0, 0], [length, width, height]);
        const innerBox = FormIt.Creation.CreateBox(
            [thickness, thickness, thickness],
            [length - 2 * thickness, width - 2 * thickness, height - 2 * thickness]
        );

        const walledBox = FormIt.GroupEdit.BooleanSubtract([outerBox], [innerBox]);
        FormIt.Selection.Clear();
        FormIt.Selection.AddItem(walledBox);
    } else {
        alert('Please enter positive values for dimensions and thickness.');
    }
}
