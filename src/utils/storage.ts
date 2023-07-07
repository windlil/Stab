export function saveData(key:string, data:any) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getData(key:string):any {
  const d = localStorage.getItem(key)
  if (d) {
    return JSON.parse(d)
  }
}