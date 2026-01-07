import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjk")
export default class BjkController {
  @operation({
    summary: "Get Bjk",
  })
  @get()
  static getBjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjk",
  })
  @post("{id}")
  static createBjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
