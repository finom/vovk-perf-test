import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjs")
export default class MjsController {
  @operation({
    summary: "Get Mjs",
  })
  @get()
  static getMjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjs",
  })
  @post("{id}")
  static createMjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
