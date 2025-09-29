import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emps")
export default class EmpController {
  @operation({
    summary: "Get Emps",
  })
  @get()
  static getEmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emp",
  })
  @post("{id}")
  static createEmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
