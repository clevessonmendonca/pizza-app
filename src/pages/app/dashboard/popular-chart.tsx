import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import colors from "tailwindcss/colors";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  CartesianGrid,
  Cell,
} from "recharts";
import { BarChart } from "lucide-react";

const data = [
  { product: "Pepperoni", amount: 40 },
  { product: "Frango", amount: 10 },
  { product: "Moda", amount: 60 },
  { product: "Strognoff", amount: 16 },
  { product: "Mussarela", amount: 102 },
];

const COLORS = [
  colors.sky[500],
  colors.emerald[500],
  colors.rose[500],
  colors.violet[500],
  colors.amber[500],
];

export const PopularChart = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="w-4 h-4 text-muted-foreground" />
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart data={data} style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              fill={colors.emerald["500"]}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {data[index].product
                      .substring(0, 12)
                      .concat("...")}{" "}
                    ({value})
                  </text>
                );
              }}
              labelLine={false}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="stroke-card hover:opacity-80"
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
