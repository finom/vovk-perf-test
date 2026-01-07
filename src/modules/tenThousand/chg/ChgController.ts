import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chg")
export default class ChgController {
  @operation({
    summary: "Get Chg",
  })
  @get()
  static getChg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chg",
  })
  @post("{id}")
  static createChg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
