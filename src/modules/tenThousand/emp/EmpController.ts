import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emps")
export default class EmpController {
  @operation({
    summary: "Get Emps",
  })
  @get()
  static getEmps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emp",
  })
  @post("{id}")
  static createEmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
