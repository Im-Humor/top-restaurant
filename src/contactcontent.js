import { innerContent } from ".";

export default function updateContactContent() {
    innerContent.innerHTML = "";
    innerContent.innerHTML = "<h2>Test contact content</h2>";
    innerContent.removeEventListener("click", updateContactContent);
}