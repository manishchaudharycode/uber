/* eslint-disable @typescript-eslint/no-explicit-any */

interface LocationSearchPanelProps {
  suggestions: string[];
  activeField: 'pickup' | 'destination';
  setPickup: (value: string) => void;
  setDestination: (value: string) => void;
}

function LocationSearchPanel({
  suggestions,
  activeField,
  setPickup,
  setDestination,
}: LocationSearchPanelProps) {

  const handleSuggestionsClick = (suggestion: string) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
  };

  return (
    <div>
      {suggestions.map((elem, index) => (
        <div
          key={index}
          onClick={() => handleSuggestionsClick(elem)}
          className="flex gap-4 p-5 items-center cursor-pointer hover:bg-gray-100"
        >
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
}

export default LocationSearchPanel;

