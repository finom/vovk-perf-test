import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wg")
export default class WgController {
  @operation({
    summary: "Get Wg",
  })
  @get()
  static getWg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wg",
  })
  @post("{id}")
  static createWg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
