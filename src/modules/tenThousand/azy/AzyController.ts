import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azy")
export default class AzyController {
  @operation({
    summary: "Get Azy",
  })
  @get()
  static getAzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azy",
  })
  @post("{id}")
  static createAzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
