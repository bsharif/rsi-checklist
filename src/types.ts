export interface ChecklistItem {
  text: string;
  subitems?: (string | ChecklistItem)[];
}

export interface ChecklistPage {
  title: string;
  items: (string | ChecklistItem)[];
}

export interface ChecklistPageProps {
  title: string;
  items: (string | ChecklistItem)[];
}

export interface ChecklistItemProps {
  item: string | ChecklistItem;
}