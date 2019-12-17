export class geo {
    private lat: string;
    private lng: string;

    public constructor(lat: string, lng: string) {
        this.lat = lat;
        this.lng = lng;
    }
    public getLat(): string {
        return this.lat;
    }
    public getLng(): string {
        return this.lng;
    }
    public setLat(lat: string): void {
        this.lat = lat;
    }
    public setLng(lng: string): void {
        this.lng = lng;
    }
}