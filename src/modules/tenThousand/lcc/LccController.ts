import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcc")
export default class LccController {
  @operation({
    summary: "Get Lcc",
  })
  @get()
  static getLcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcc",
  })
  @post("{id}")
  static createLcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
