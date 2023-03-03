import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const Inscription = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashPass) {
        if(err) {
            res.json({
                error : err
            })
        }

        let user = new User ({
            name : req.body.name,
            password : hashPass
        })
            user.save()
            .then(user => {
                res.json({
                    message : 'Utilisateur Ajouté avec succès ✅✅✨'
                })
            }).catch(error =>{
                res.json({
                    message : 'Une erreur est survenue ❌❌💥'
                })
            })
    })

}


export const Connexion = (req, res, next) => {
    var name = req.body.name
    var password = req.body.pwd

    User.findOne({username:name})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(err) {
                    res.json({
                        error : err
                    })
                }
                if(result) {
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Connexion éffectuée avec succès✅✅',
                        token
                    })
                }else{
                    res.json({
                        message: 'Mot de passe Incorrect ❌❌'
                    })
                }
            })
        }else {
            res.json({message: 'Aucun Utilisateur trouvé'})
        }
    })
    
}

