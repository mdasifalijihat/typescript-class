// enum: TypeScript Enums help you create a group of related constant values with easy-to-read names.Instead of using random numbers or strings, enums let you use clear labels.

// set of fixed string lateral or jags rakhe

// type UseRoles = "Admin" | "Editor" | "Viewer";

// use enum

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const conEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditePermisable = conEdit(UserRoles.Admin);
console.log(isEditePermisable);
