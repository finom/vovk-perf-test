import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzz")
export default class FzzController {
  @operation({
    summary: "Get Fzz",
  })
  @get()
  static getFzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzz",
  })
  @post("{id}")
  static createFzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
