import { innerContent } from ".";

export default function updateMenuContent() {
    innerContent.innerHTML = "";
    innerContent.innerHTML = "<h2>Test menu content</h2>";
    innerContent.removeEventListener("click", updateMenuContent);
}