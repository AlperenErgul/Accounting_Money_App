export interface createExpense {
  title:string,
  description:string,
  expense:number
}

export interface deleteExpense {
  id:number
}

export interface updateExpense {
  id:number,
  title:string,
  description:string,
  expense:number
}

export interface expense{
  id:number,
  title:string,
  description: string,
  expense: number
}



