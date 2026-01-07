import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzj")
export default class FzjController {
  @operation({
    summary: "Get Fzj",
  })
  @get()
  static getFzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzj",
  })
  @post("{id}")
  static createFzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
