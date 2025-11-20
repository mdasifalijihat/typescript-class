// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
var UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
var conEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
var isEditePermisable = conEdit(UserRoles.Admin);
console.log(isEditePermisable);

/*
{
   readonly Admin: "Admin",
   readonly Editor: "Editor",
   readonly Viewer: "Viewer",

   1. typeof operator
   2. keyof operator
     const user = {
               id: 222,
               name: "Mezba"
             }

             typeof user;
             type user {
             id: number
             name: string {
             typeof UserRoles {
             Admin: string
             }
             }
             }
   }
 **/
