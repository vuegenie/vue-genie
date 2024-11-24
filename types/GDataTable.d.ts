import { VNode } from "vue";

// Define the type for a column header
export interface HeaderDefinition {
  key: string; // The key for the column data
  label: string; // Display label for the column
  type: string; // Data type (e.g., string, number, etc.)
}

// Props for the GDataTable component
export interface GDataTableProps {
  headers: HeaderDefinition[]; // Array of column definitions
  items: Array<Object>; // Array of column definitions
  //   tableData: Record<string, any>[]; // Array of table data rows
}
