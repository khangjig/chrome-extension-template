export const objectToForm = (object) => {
    const form_data = new FormData();
    for (var key in object) {
        form_data.append(key, object[key]);
    }
    return form_data
}