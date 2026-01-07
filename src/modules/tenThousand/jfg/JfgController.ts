import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfg")
export default class JfgController {
  @operation({
    summary: "Get Jfg",
  })
  @get()
  static getJfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfg",
  })
  @post("{id}")
  static createJfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
