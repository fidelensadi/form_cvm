import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number;
  vertical?: boolean;
  onStepClick?: (stepIdx: number) => void;
}

export default function Stepper({ steps, currentStep, vertical = false, onStepClick }: StepperProps) {
  if (!vertical) {
    return (
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, idx) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div
                className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-white ${
                  idx + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                {idx + 1}
              </div>
              <span className={`mt-2 text-xs ${idx + 1 === currentStep ? 'text-blue-700 font-semibold' : 'text-gray-500'}`}>{step}</span>
            </div>
            {idx < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2 ${idx + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
  // Stepper vertical étiré, titres centrés, titres cliquables
  return (
    <div className="flex flex-col items-center py-8 w-full">
      {steps.map((step, idx) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center w-full" style={{ minHeight: 80 }}>
            <div className="flex flex-col items-center">
              <div
                className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-white text-base ${
                  idx + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                {idx + 1}
              </div>
              <button
                type="button"
                className={`mt-2 text-base focus:outline-none transition font-medium ${idx + 1 === currentStep ? 'text-blue-700' : 'text-gray-500'} hover:underline`}
                style={{ minWidth: 120 }}
                onClick={() => onStepClick && onStepClick(idx + 1)}
              >
                {step}
              </button>
            </div>
          </div>
          {idx < steps.length - 1 && (
            <div className="flex flex-col items-center w-full">
              <div className="h-12 w-px bg-gray-300"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
} 