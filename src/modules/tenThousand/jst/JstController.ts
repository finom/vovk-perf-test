import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jst")
export default class JstController {
  @operation({
    summary: "Get Jst",
  })
  @get()
  static getJst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jst",
  })
  @post("{id}")
  static createJst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
