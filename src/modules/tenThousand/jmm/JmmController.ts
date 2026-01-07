import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmm")
export default class JmmController {
  @operation({
    summary: "Get Jmm",
  })
  @get()
  static getJmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmm",
  })
  @post("{id}")
  static createJmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
