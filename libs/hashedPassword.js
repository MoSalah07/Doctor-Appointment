import { hash, compare } from "bcryptjs";

const hashPassword = async (pass) => {
  const hashedPassword = await hash(pass, 12);
  return hashedPassword;
};

async function vefiyPassword(password, hashPassword) {
  const isValid = await compare(password, hashPassword);
  return isValid;
}

export { hashPassword, vefiyPassword };
