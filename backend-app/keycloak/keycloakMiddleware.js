
const validator = require('./tokenValidator');

const protect = async function (req ) {
    const authHeader = req.headers['authorization'];
    console.log('auth found');
    const token = authHeader && authHeader.split(' ')[1];
    console.log('token', token)
    const sessionDetails = await validator.validateKeycloakToken(token);
    console.log('session deatils' , sessionDetails);
    req.sessionDetails = sessionDetails;
}

let checkRoles = (parentRoles, subsetRoles, res, next) => {
    const hasValidRoles = subsetRoles.every((role) => {
        return parentRoles.includes(role)
    })
    if (hasValidRoles) {
        next()
    } else {
        res.status(401).json({ message: 'Unauthorized: Invalid role' });
        return;
    }

}



const hasApplicationRoles = (appName, roles) => {

    return async (req, res, next) => {

        await protect(req);

        console.log('req.sessionDetails', req.sessionDetails)
        if (req.sessionDetails === undefined) {
            res.status(401).json({ message: 'Invalid token' });
            return;   
        }
        
        const appRoles = req.sessionDetails.resource_access[appName]

        if (appRoles == null) {
            res.status(401).json({ message: 'Invalid role' });
            return;
        }

        checkRoles(appRoles.roles, roles,res,next);

    }
}


const hasRealmRoles = (roles) => {

    return async(req, res, next) => {

        await protect(req);

        console.log('req.sessionDetails', req.sessionDetails)
        if (req.sessionDetails === undefined) {
            res.status(401).json({ message: 'Invalid token' });
            return;   
        }
        
        const realmRoles = req.sessionDetails.realm_access
        checkRoles(realmRoles.roles, roles,res, next);

    }
}

module.exports = {
    protect,
    hasApplicationRoles,
    hasRealmRoles

}