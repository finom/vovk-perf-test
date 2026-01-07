import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emm")
export default class EmmController {
  @operation({
    summary: "Get Emm",
  })
  @get()
  static getEmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emm",
  })
  @post("{id}")
  static createEmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
