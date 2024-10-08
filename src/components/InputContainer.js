import { useState } from 'react';

export default function InputContainer() {
    const [fields, setFields] = useState([{ location: '' }]);

    const addField = () => {
        if (fields.length < 5) {
            setFields([...fields, { location: '' }]);
        }
    };

    const removeField = (index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);
    };

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 space-y-4">
            {fields.map((field, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <div className="flex-1 space-y-2">
                        <input 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text" 
                            placeholder={`Customer location ${index + 1}`}
                        />
                        <select 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled selected>Select restaurant</option>
                            <option >Camp Burger</option>
                            <option>Katakirr Misal</option>
                        </select>
                    </div>
                    {index > 0 && (
                        <button 
                            onClick={() => removeField(index)}
                            className="px-2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                        >
                            X
                        </button>
                    )}
                </div>
            ))}
            {fields.length < 5 && (
                <button 
                    onClick={addField}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Add Another Location
                </button>
            )}
        </div>
    );
}
