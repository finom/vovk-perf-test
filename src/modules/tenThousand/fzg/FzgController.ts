import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzg")
export default class FzgController {
  @operation({
    summary: "Get Fzg",
  })
  @get()
  static getFzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzg",
  })
  @post("{id}")
  static createFzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
