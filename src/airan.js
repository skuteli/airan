var db = 10;
window.db=db; //debugging
const registeredActions = {};
const registeredSubscriptions = {};

export const
    registerAction = (actionName, actionFunction) => {
        registeredActions[actionName] = actionFunction;
            return (payload)=>{
                console.log(actionName + " called");
                db = registeredActions[actionName](db, payload);
                console.log(db, ", DB now");
                Object.entries(registeredSubscriptions).forEach(
                    ([n,f])=>f(db)
                );
                return actionFunction(db, payload)
            }
};
export const
    registerSubscription = (subscriptionName, subscriptionFunction) => {
        registeredSubscriptions[subscriptionName] = subscriptionFunction;
        return ()=> {
                console.log(subscriptionName + " called", subscriptionFunction(db));
                return subscriptionFunction(db)
        }
};

export const
    AiranConnector = ({component, subscriptions}) =>
        component;

export const
    dispatch = (actionName, payload) =>
        db = registeredActions[actionName](db, payload);
        Object.entries(registeredSubscriptions).forEach(
            ([n,f])=>f(db)
        );
