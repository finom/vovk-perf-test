import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzl")
export default class FzlController {
  @operation({
    summary: "Get Fzl",
  })
  @get()
  static getFzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzl",
  })
  @post("{id}")
  static createFzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
