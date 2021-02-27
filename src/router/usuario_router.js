import {Router} from 'express';
import users from '../controller/usuarios_controller';
const router = Router();

router.get('/users/:palabra',users.getUsers);

export default router;