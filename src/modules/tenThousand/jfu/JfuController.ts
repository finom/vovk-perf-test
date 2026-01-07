import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfu")
export default class JfuController {
  @operation({
    summary: "Get Jfu",
  })
  @get()
  static getJfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfu",
  })
  @post("{id}")
  static createJfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
