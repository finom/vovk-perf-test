import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzr")
export default class FzrController {
  @operation({
    summary: "Get Fzr",
  })
  @get()
  static getFzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzr",
  })
  @post("{id}")
  static createFzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
