import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boy")
export default class BoyController {
  @operation({
    summary: "Get Boy",
  })
  @get()
  static getBoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boy",
  })
  @post("{id}")
  static createBoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
