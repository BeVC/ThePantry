export class Apiresponse<T> {
    public status: number;
    public statusText: string;
    public ok: boolean;
    public data: T;
    
}
