import NumberChanging from "./assets/Components/NumberChanging";
import ObjectChanging from "./assets/Components/ObjectChanging";
import ImmutableArray from "./assets/Components/ImmutableArray";
import FormManaging from "./assets/Components/FormManaging";
import ToggleParagraph from "./assets/Components/ToggleParagraph";

function App() {
  return (
    <>
      <p>useState for Toggling</p>
      <ToggleParagraph />
      <p>useState for changing numbers</p>
      <NumberChanging />
      <p>useState for changing object property values</p>
      <ObjectChanging />
      <p>useState for working with immutable arrays</p>
      <ImmutableArray />
      <p>useState for working with Form</p>
      <FormManaging />
    </>
  );
}

export default App;
