import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzk")
export default class FzkController {
  @operation({
    summary: "Get Fzk",
  })
  @get()
  static getFzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzk",
  })
  @post("{id}")
  static createFzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
