import { procedure, prefix, get, post, operation } from "vovk";

@prefix("els")
export default class ElsController {
  @operation({
    summary: "Get Els",
  })
  @get()
  static getEls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Els",
  })
  @post("{id}")
  static createEls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
