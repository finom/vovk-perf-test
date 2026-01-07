import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzk")
export default class LzkController {
  @operation({
    summary: "Get Lzk",
  })
  @get()
  static getLzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzk",
  })
  @post("{id}")
  static createLzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
