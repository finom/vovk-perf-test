import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzf")
export default class FzfController {
  @operation({
    summary: "Get Fzf",
  })
  @get()
  static getFzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzf",
  })
  @post("{id}")
  static createFzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
