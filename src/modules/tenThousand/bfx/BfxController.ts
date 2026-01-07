import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfx")
export default class BfxController {
  @operation({
    summary: "Get Bfx",
  })
  @get()
  static getBfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfx",
  })
  @post("{id}")
  static createBfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
