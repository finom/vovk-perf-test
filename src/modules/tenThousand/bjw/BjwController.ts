import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjw")
export default class BjwController {
  @operation({
    summary: "Get Bjw",
  })
  @get()
  static getBjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjw",
  })
  @post("{id}")
  static createBjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
