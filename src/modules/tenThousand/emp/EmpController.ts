import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
