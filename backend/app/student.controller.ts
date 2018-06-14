import { Application, Router, Request, Response } from 'express';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export const StudentController: Router = router;
