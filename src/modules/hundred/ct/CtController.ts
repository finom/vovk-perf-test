import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ct")
export default class CtController {
  @operation({
    summary: "Get Ct",
  })
  @get()
  static getCt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ct",
  })
  @post("{id}")
  static createCt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
