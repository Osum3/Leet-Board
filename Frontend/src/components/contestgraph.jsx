import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export function Component({data}) {
  const chartData = [
    { month: "January", desktop:180, mobile: 21 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]
  
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color:'rgb(161, 52, 52)',
    },
  
    mobile: {
      label: "Mobile",
      color:  '#D41212',
    }
  }
  console.log(data[0][0])
  return (
    <CardContent className='w-[100%] '>
      {/* // <CardContent  classNa> */}

        <ChartContainer   config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              label={{ value: "Visitors", angle: -90, position: "insideLeft", style: { textAnchor: "middle" } }} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="#211211"
              strokeWidth={2}
              dot={false} />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="211211"
              strokeWidth={2}
              dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
      // </CardContent>

    // <Card>
    //   <CardHeader>
    //     <CardTitle>Line Chart - Multiple</CardTitle>
    //     <CardDescription>January - June 2024</CardDescription>
    //   </CardHeader>
    //   <CardFooter>
    //     <div className="flex w-full items-start gap-2 text-sm">
    //       <div className="grid gap-2">
    //         <div className="flex items-center gap-2 font-medium leading-none">
    //           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
    //         </div>
    //         <div className="flex items-center gap-2 leading-none text-muted-foreground">
    //           Showing total visitors for the last 6 months
    //         </div>
    //       </div>
    //     </div>
    //   </CardFooter>
    // </Card>
  );
}
