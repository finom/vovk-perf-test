import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bun")
export default class BunController {
  @operation({
    summary: "Get Bun",
  })
  @get()
  static getBun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bun",
  })
  @post("{id}")
  static createBun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
