const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',

  // register and login
  'POST /registration': 'RegAndLog.registration',
  'POST /signin': 'RegAndLog.SignIn',
  // For home screen
  'POST /home': 'transactions.transactionPage',
  'POST /income': 'transactions.CategoryIncome',
  'POST /expense': 'transactions.CategoryExpense',
  // insertion and deletion
  'POST /add': 'transactions.Insertion',
  'POST /delete': 'transactions.Deletion',
  //innerjoin
  'POST /join': 'StaffRegister.staffLogin',
  // api for imageupload
  'POST /upload': 'abimage.attachImage',
  // TASK
  'POST /Task': 'test.Task',
  'POST /Add_Task': 'test.Add_task',
  'POST /edit_Task': 'test.Edit_task',
  'POST /delete_Task': 'test.Delete_task',
  //journal
  'POST /insert_journal': 'journal.insert_journal',
  'POST /combained_jounal': 'journal.combained_journal',
  // SINCA RESTAURANT
  'POST /neworder': 'sinca.NewOrder',
  'POST /newordercategory': 'sinca.NewOrdercategory',
  // customer register
 'POST /cusregister': 'customer.cusRegister',
};

module.exports = publicRoutes;
