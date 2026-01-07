import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gts")
export default class GtsController {
  @operation({
    summary: "Get Gts",
  })
  @get()
  static getGts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gts",
  })
  @post("{id}")
  static createGts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
