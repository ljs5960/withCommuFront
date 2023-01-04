export function getActiveSection(path : string) {
    if (path === "/") {
        return "home"
    }
    const section = path.split('/')[1];
    return section;
}