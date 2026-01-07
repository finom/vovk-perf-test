import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mw")
export default class MwController {
  @operation({
    summary: "Get Mw",
  })
  @get()
  static getMw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mw",
  })
  @post("{id}")
  static createMw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
