import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhk")
export default class LhkController {
  @operation({
    summary: "Get Lhk",
  })
  @get()
  static getLhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhk",
  })
  @post("{id}")
  static createLhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
