import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bud")
export default class BudController {
  @operation({
    summary: "Get Bud",
  })
  @get()
  static getBud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bud",
  })
  @post("{id}")
  static createBud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
