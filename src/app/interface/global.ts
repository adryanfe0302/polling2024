export interface IglobalDataInput {
  no: number,
  name: string,
}

export interface Iperson {
  images: string;
  name: string;
  status: string;
  _id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IlistCandidate{
  comments: string[],
  createdAt: string;
  president: Iperson;
  vicePresident: Iperson;
  votes?: number
}

export interface IheadCandidate {
  keyword?: string;
  listCandidate: IlistCandidate[];
  pageOption?: number;
  totalCandidate?: number;
  totalpage?: number;
}

export interface IpostCandidate {
  president: string;
  vicePresident: string;
  comments?: [string];
  votes?: number;
}

export interface Ipolling{
  label: string;
  votes: number;
  presidentimage:string;
  vicepresidentimage:string;
  id:string;
}

export interface IqueryCandidate{
  pageno: number;
  pageoption: number;
  keyword: string
}
