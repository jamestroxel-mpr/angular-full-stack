import { fakeListings } from "./fake-data";

export const getAllLIstingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: (req, h) => {
        return fakeListings;
    }
}

