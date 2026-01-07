import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzv")
export default class FzvController {
  @operation({
    summary: "Get Fzv",
  })
  @get()
  static getFzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzv",
  })
  @post("{id}")
  static createFzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
