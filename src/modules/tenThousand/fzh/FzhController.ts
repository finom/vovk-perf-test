import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzh")
export default class FzhController {
  @operation({
    summary: "Get Fzh",
  })
  @get()
  static getFzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzh",
  })
  @post("{id}")
  static createFzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
