import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crv")
export default class CrvController {
  @operation({
    summary: "Get Crv",
  })
  @get()
  static getCrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crv",
  })
  @post("{id}")
  static createCrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
