import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmn")
export default class CmnController {
  @operation({
    summary: "Get Cmn",
  })
  @get()
  static getCmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmn",
  })
  @post("{id}")
  static createCmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
