
import Beer from '../interfaces/Beer';

function findEmptyKey(map: Map<number, Beer>): number | boolean {
    for (const [key, value] of map) {
      if (!('id' in value)) return key
    }
    return false
  }
  
function mapContains(item: Beer, map: Map<number, Beer>): boolean {
    for (const [key, value] of map) {
        if (value?.id === item.id) return true
    }
    return false
}
  
function removeSelected(key: number, map: Map<number, Beer>): Map<number, Beer> {
    let cloneMap = map
    cloneMap.set(key, {} as Beer)
    return new Map<number, Beer>([...cloneMap])
}

export { findEmptyKey, mapContains, removeSelected }

