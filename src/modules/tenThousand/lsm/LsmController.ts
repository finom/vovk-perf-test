import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsm")
export default class LsmController {
  @operation({
    summary: "Get Lsm",
  })
  @get()
  static getLsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsm",
  })
  @post("{id}")
  static createLsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
