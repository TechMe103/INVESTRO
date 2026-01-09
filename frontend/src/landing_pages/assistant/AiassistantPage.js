import React, { useState, useRef, useEffect } from 'react';
import './AiassistantPage.css';

// Main App component for the AI Chatbot
export default function App() {
  // State to store chat messages
  const [messages, setMessages] = useState([]);
  // State to store the current user input
  const [input, setInput] = useState('');
  // State to manage loading indicator during AI response generation
  const [isLoading, setIsLoading] = useState(false);
  // Ref for the chat messages container to enable auto-scrolling
  const messagesEndRef = useRef(null);

  // Effect to scroll to the bottom of the chat when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to scroll to the bottom of the chat container
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (input.trim() === '') return; // Prevent sending empty messages

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Add user message to chat history
    setInput(''); // Clear the input field
    setIsLoading(true); // Show loading indicator

    try {
      // Prepare chat history for the AI model, including the current user message
      const chatHistory = messages.map(msg => ({ role: msg.sender === 'user' ? 'user' : 'model', parts: [{ text: msg.text }] }));
      chatHistory.push({ role: "user", parts: [{ text: input }] });

      const payload = { contents: chatHistory };
      const apiKey = "AIzaSyCvVpA3RBTWUPuvcr5mLSfmIrrRHexOBEE"; // Canvas will automatically provide the API key at runtime

      // API endpoint for Gemini 2.0 Flash model
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      // Make the API call to the Gemini model
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      // Process the AI's response
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const aiText = result.candidates[0].content.parts[0].text;
        const aiMessage = { sender: 'ai', text: aiText };
        setMessages((prevMessages) => [...prevMessages, aiMessage]); // Add AI message to chat history
      } else {
        // Handle cases where the response structure is unexpected or content is missing
        console.error("AI response structure unexpected:", result);
        const errorMessage = { sender: 'ai', text: 'Sorry, I could not generate a response. Please try again.' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage = { sender: 'ai', text: 'An error occurred while connecting to the AI. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  // Function to handle pressing Enter key in the input field
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Prevent new line when shift is pressed
      e.preventDefault(); // Prevent default Enter behavior (e.g., form submission)
      handleSendMessage();
    }
  };

  return (
    // Main container for the chatbot, centered and responsive
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-inter">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl flex flex-col h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-t-xl text-center text-2xl font-semibold shadow-md">
          AI Chatbot
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[70%] rounded-xl p-3 shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[70%] rounded-xl p-3 shadow-md bg-gray-200 text-gray-800 rounded-bl-none">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} /> {/* Element to scroll into view */}
        </div>

        {/* Chat Input Area */}
        <div className="p-4 border-t border-gray-200 flex items-center bg-gray-50 rounded-b-xl">
          <textarea
            className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-12 overflow-hidden"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            rows={1}
            style={{ minHeight: '48px', maxHeight: '120px' }} // Set min and max height for textarea
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading}
            className={`ml-3 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform active:scale-95
              ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {/* Send icon (using a simple SVG for compatibility) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}