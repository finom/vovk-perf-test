import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hst")
export default class HstController {
  @operation({
    summary: "Get Hst",
  })
  @get()
  static getHst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hst",
  })
  @post("{id}")
  static createHst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
