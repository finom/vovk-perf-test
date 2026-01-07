import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzc")
export default class FzcController {
  @operation({
    summary: "Get Fzc",
  })
  @get()
  static getFzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzc",
  })
  @post("{id}")
  static createFzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
