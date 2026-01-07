import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzs")
export default class LzsController {
  @operation({
    summary: "Get Lzs",
  })
  @get()
  static getLzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzs",
  })
  @post("{id}")
  static createLzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
