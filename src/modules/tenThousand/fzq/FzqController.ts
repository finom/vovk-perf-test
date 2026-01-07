import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzq")
export default class FzqController {
  @operation({
    summary: "Get Fzq",
  })
  @get()
  static getFzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzq",
  })
  @post("{id}")
  static createFzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
