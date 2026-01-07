import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hs")
export default class HsController {
  @operation({
    summary: "Get Hs",
  })
  @get()
  static getHs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hs",
  })
  @post("{id}")
  static createHs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
