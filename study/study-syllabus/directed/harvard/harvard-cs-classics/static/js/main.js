function LinkFormatter(value, row, index) {
    if (value) {
        return "<a href='viewer/web/viewer.html?file=/papers/"+value+"'>Paper</a>";
    } else {
        return "";
    }
}
