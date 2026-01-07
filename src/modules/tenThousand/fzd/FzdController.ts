import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzd")
export default class FzdController {
  @operation({
    summary: "Get Fzd",
  })
  @get()
  static getFzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzd",
  })
  @post("{id}")
  static createFzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
