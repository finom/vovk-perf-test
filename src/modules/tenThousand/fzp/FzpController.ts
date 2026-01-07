import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzp")
export default class FzpController {
  @operation({
    summary: "Get Fzp",
  })
  @get()
  static getFzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzp",
  })
  @post("{id}")
  static createFzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
