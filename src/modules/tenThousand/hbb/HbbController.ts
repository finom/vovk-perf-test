import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbb")
export default class HbbController {
  @operation({
    summary: "Get Hbb",
  })
  @get()
  static getHbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbb",
  })
  @post("{id}")
  static createHbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
