import { value } from './call';

export function string(raw: string): value {
  return JSON.stringify(raw);
}