import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbs")
export default class CbsController {
  @operation({
    summary: "Get Cbs",
  })
  @get()
  static getCbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbs",
  })
  @post("{id}")
  static createCbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
