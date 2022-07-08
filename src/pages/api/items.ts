import { NextApiRequest, NextApiResponse } from 'next';

const users = [
    { id: 1, name: 'John Doe', age: 21 },
    { id: 2, name: 'John Doe', age: 21 },
    { id: 3, name: 'John Doe', age: 21 },
    { id: 4, name: 'John Doe', age: 21 },
];

export default function handle(request: NextApiRequest, response: NextApiResponse) {
    response.status(200).json(users);
}