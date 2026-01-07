import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgr")
export default class KgrController {
  @operation({
    summary: "Get Kgr",
  })
  @get()
  static getKgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgr",
  })
  @post("{id}")
  static createKgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
