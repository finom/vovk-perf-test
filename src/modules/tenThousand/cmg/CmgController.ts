import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmg")
export default class CmgController {
  @operation({
    summary: "Get Cmg",
  })
  @get()
  static getCmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmg",
  })
  @post("{id}")
  static createCmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
