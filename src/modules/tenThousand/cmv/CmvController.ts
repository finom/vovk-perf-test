import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmv")
export default class CmvController {
  @operation({
    summary: "Get Cmv",
  })
  @get()
  static getCmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmv",
  })
  @post("{id}")
  static createCmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
