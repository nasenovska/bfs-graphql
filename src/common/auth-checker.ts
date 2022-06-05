import { AuthChecker } from 'type-graphql';
import { Context } from './context';

export const authChecker: AuthChecker<Context> = (
    {context: {user}}) => {
    if (!user) {
        return false;
    }

    return true;

};
