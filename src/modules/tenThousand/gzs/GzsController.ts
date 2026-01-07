import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzs")
export default class GzsController {
  @operation({
    summary: "Get Gzs",
  })
  @get()
  static getGzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzs",
  })
  @post("{id}")
  static createGzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
