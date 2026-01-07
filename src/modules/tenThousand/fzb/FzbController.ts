import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzb")
export default class FzbController {
  @operation({
    summary: "Get Fzb",
  })
  @get()
  static getFzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzb",
  })
  @post("{id}")
  static createFzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
