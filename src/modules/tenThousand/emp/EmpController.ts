import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emp")
export default class EmpController {
  @operation({
    summary: "Get Emp",
  })
  @get()
  static getEmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emp",
  })
  @post("{id}")
  static createEmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
