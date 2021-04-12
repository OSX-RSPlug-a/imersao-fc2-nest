db.createUser(
    {
        user: "root",
        pwd: "root",
        roles: [
            {
                role: "readWrite",
                db: "nest"
            }
        ]
    }
);

db.routes.insertMany([
    {
        _id: '1',
        title: 'Primeiro',
        startPosition: { lat: -15.82594, lng: -47.92923 },
        endPosition: { lat: -15.82584, lng: -47.92821 },
    },
    {
        _id: '2',
        title: 'Segundo',
        startPosition: { lat: -15.72595, lng: -47.72925 },
        endPosition: { lat: -15.83596, lng: -47.72845 },
    },
    {
        _id: '3',
        title: 'Terceiro',
        startPosition: { lat: -15.62690, lng: -47.62699 },
        endPosition: { lat: -15.52591, lng: -47.52933 },
    },
]);

collection == table