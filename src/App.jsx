// The layout/skeleton of application

// Import all the components
// Router import
import { BrowserRouter } from "react-router-dom";

// Content components import
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Work,
	StarsCanvas,
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>

				{/* Each component  is a section */}
				<About />
				<Experience />
				<Tech />
				<Work />
				<Feedbacks />

				{/* Used for star display */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
