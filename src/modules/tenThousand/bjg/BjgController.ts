import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjg")
export default class BjgController {
  @operation({
    summary: "Get Bjg",
  })
  @get()
  static getBjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjg",
  })
  @post("{id}")
  static createBjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
