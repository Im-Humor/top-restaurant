import { innerContent } from "./index.js";

export default function updateHomeContent() {
    innerContent.innerHTML = "";
    innerContent.innerHTML = "<h2>Test content</h2>";
    innerContent.removeEventListener("click", updateHomeContent);
}