import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blt")
export default class BltController {
  @operation({
    summary: "Get Blt",
  })
  @get()
  static getBlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blt",
  })
  @post("{id}")
  static createBlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
