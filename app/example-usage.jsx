import { Component as ChartBarMultiple } from "@/components/chart-bar-multiple"

export default function ExampleUsage() {
  // Example of custom data
  const customData = [
    { month: "July", desktop: 250, mobile: 150 },
    { month: "August", desktop: 320, mobile: 220 },
    { month: "September", desktop: 280, mobile: 190 },
  ]

  return (
    <div className="space-y-8 p-6">
      {/* Using with default data */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Default Chart</h2>
        <ChartBarMultiple />
      </div>
      {/* Using with custom data */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Custom Chart</h2>
        <ChartBarMultiple
          data={customData}
          title="Q3 Performance"
          description="July - September 2024"
          footerText="Showing Q3 visitor statistics" />
      </div>
    </div>
  );
}
