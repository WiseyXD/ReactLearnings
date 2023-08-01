import { render } from "@testing-library/react";
import Header from "../Header";

test("Check wether Header logo loads on Render ", () => {
	const header = render(<Header />);
	console.log(header);
});
