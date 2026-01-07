import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzs")
export default class FzsController {
  @operation({
    summary: "Get Fzs",
  })
  @get()
  static getFzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzs",
  })
  @post("{id}")
  static createFzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
