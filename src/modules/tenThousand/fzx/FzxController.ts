import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzx")
export default class FzxController {
  @operation({
    summary: "Get Fzx",
  })
  @get()
  static getFzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzx",
  })
  @post("{id}")
  static createFzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
