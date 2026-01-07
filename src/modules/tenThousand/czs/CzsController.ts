import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czs")
export default class CzsController {
  @operation({
    summary: "Get Czs",
  })
  @get()
  static getCzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czs",
  })
  @post("{id}")
  static createCzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
