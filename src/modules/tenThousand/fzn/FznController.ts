import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzn")
export default class FznController {
  @operation({
    summary: "Get Fzn",
  })
  @get()
  static getFzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzn",
  })
  @post("{id}")
  static createFzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
