export interface ElementMetrics {
  id: string;
  selector: string;
  tagName: string;
  boundingBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface PageBaseline {
  url: string;
  timestamp: string;
  viewport: { width: number; height: number };
  elements: ElementMetrics[];
}
