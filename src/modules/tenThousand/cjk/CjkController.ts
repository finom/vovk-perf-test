import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjk")
export default class CjkController {
  @operation({
    summary: "Get Cjk",
  })
  @get()
  static getCjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjk",
  })
  @post("{id}")
  static createCjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
