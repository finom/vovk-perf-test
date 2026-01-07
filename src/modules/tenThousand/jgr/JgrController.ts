import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgr")
export default class JgrController {
  @operation({
    summary: "Get Jgr",
  })
  @get()
  static getJgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgr",
  })
  @post("{id}")
  static createJgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
