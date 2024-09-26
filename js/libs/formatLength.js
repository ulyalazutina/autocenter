export const formatLength = (stroke) => {
    if (stroke.length > 27) {
        return stroke.substring(0, 27) + "...";
    } else {
        return stroke
    }
}