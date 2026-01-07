import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbm")
export default class JbmController {
  @operation({
    summary: "Get Jbm",
  })
  @get()
  static getJbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbm",
  })
  @post("{id}")
  static createJbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
