"use client";

// Simple localStorage-based CRUD for demo mode only.
// Items are stored under keys like 'team7_projects', 'team7_events', etc.
export type ResourceKey = 'projects' | 'events' | 'blog' | 'achievements';

export interface BaseItem {
  id: string; // uuid
  created_at: number;
}

function fullKey(key: ResourceKey) {
  return `team7_${key}`;
}

export function getItems<T extends BaseItem>(key: ResourceKey): T[] {
  if (typeof window === 'undefined') return [];
  const json = localStorage.getItem(fullKey(key));
  if (!json) return [];
  try {
    return JSON.parse(json) as T[];
  } catch {
    return [];
  }
}

export function saveItem<T extends BaseItem>(key: ResourceKey, item: T) {
  const items = getItems<T>(key);
  // if id exists, replace
  const idx = items.findIndex(i => i.id === item.id);
  if (idx >= 0) {
    items[idx] = item;
  } else {
    items.push(item);
  }
  localStorage.setItem(fullKey(key), JSON.stringify(items));
}

export function deleteItem(key: ResourceKey, id: string) {
  const items = getItems<BaseItem>(key).filter(i => i.id !== id);
  localStorage.setItem(fullKey(key), JSON.stringify(items));
}
