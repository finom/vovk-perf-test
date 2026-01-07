import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kst")
export default class KstController {
  @operation({
    summary: "Get Kst",
  })
  @get()
  static getKst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kst",
  })
  @post("{id}")
  static createKst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
