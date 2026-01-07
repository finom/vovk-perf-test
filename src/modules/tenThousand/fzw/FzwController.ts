import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzw")
export default class FzwController {
  @operation({
    summary: "Get Fzw",
  })
  @get()
  static getFzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzw",
  })
  @post("{id}")
  static createFzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
