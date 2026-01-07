import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzm")
export default class FzmController {
  @operation({
    summary: "Get Fzm",
  })
  @get()
  static getFzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzm",
  })
  @post("{id}")
  static createFzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
