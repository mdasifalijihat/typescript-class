// enum: TypeScript Enums help you create a group of related constant values with easy-to-read names.Instead of using random numbers or strings, enums let you use clear labels.
// set of fixed string lateral or jags rakhe
// type UseRoles = "Admin" | "Editor" | "Viewer";
// use enum
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
var conEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
var isEditePermisable = conEdit(UserRoles.Admin);
console.log(isEditePermisable);
