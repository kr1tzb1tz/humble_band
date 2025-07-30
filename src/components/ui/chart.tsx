import * as React from 'react';
import { ResponsiveContainer } from 'recharts';

import { cn } from '@/lib/utils';

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

const THEMES_NEW = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(222.2 84% 4.9%)',
    primary: 'hsl(222.2 47.4% 11.2%)',
    primaryForeground: 'hsl(210 40% 98%)',
    secondary: 'hsl(210 40% 96%)',
    secondaryForeground: 'hsl(222.2 47.4% 11.2%)',
    muted: 'hsl(210 40% 96%)',
    mutedForeground: 'hsl(215.4 16.3% 46.9%)',
    accent: 'hsl(210 40% 96%)',
    accentForeground: 'hsl(222.2 47.4% 11.2%)',
    destructive: 'hsl(0 84.2% 60.2%)',
    destructiveForeground: 'hsl(210 40% 98%)',
    border: 'hsl(214.3 31.8% 91.4%)',
    input: 'hsl(214.3 31.8% 91.4%)',
    ring: 'hsl(222.2 84% 4.9%)',
    chart: {
      '1': 'hsl(222.2 47.4% 11.2%)',
      '2': 'hsl(215.4 16.3% 46.9%)',
      '3': 'hsl(215.4 16.3% 46.9%)',
      '4': 'hsl(215.4 16.3% 46.9%)',
      '5': 'hsl(215.4 16.3% 46.9%)',
    },
  },
  dark: {
    background: 'hsl(222.2 84% 4.9%)',
    foreground: 'hsl(210 40% 98%)',
    primary: 'hsl(210 40% 98%)',
    primaryForeground: 'hsl(222.2 47.4% 11.2%)',
    secondary: 'hsl(217.2 32.6% 17.5%)',
    secondaryForeground: 'hsl(210 40% 98%)',
    muted: 'hsl(217.2 32.6% 17.5%)',
    mutedForeground: 'hsl(215 20.2% 65.1%)',
    accent: 'hsl(217.2 32.6% 17.5%)',
    accentForeground: 'hsl(210 40% 98%)',
    destructive: 'hsl(0 62.8% 30.6%)',
    destructiveForeground: 'hsl(210 40% 98%)',
    border: 'hsl(217.2 32.6% 17.5%)',
    input: 'hsl(217.2 32.6% 17.5%)',
    ring: 'hsl(212.7 26.8% 83.9%)',
    chart: {
      '1': 'hsl(210 40% 98%)',
      '2': 'hsl(215 20.2% 65.1%)',
      '3': 'hsl(215 20.2% 65.1%)',
      '4': 'hsl(215 20.2% 65.1%)',
      '5': 'hsl(215 20.2% 65.1%)',
    },
  },
} as const;

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps>({
  config: {},
});

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error('useChart must be used within a ChartProvider');
  }
  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    config: ChartConfig;
  }
>(({ config, className, children, ...props }, ref) => {
  return (
    <ChartContext.Provider value={{ config }}>
      <div ref={ref} className={cn('space-y-4', className)} {...props}>
        {children}
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = 'ChartContainer';

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const { config: chartConfig } = useChart();

  return (
    <style
      id={id}
      dangerouslySetInnerHTML={{
        __html: Object.entries(chartConfig)
          .map(
            ([key, value]) =>
              `--chart-${key}: ${typeof value === 'object' && value !== null && 'color' in value ? value.color : value};`
          )
          .join('\n'),
      }}
    />
  );
};

// Placeholder components for compatibility
const ChartTooltip = () => null;
const ChartTooltipContent = () => null;
const ChartLegend = () => null;
const ChartLegendContent = () => null;

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
