export function showNotification(setter) {
    setter(true);
    // show notification for 1.2 seconds
    setTimeout(() => {
        setter(false);
    }, 1200);
}
