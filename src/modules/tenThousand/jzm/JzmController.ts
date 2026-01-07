import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzm")
export default class JzmController {
  @operation({
    summary: "Get Jzm",
  })
  @get()
  static getJzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzm",
  })
  @post("{id}")
  static createJzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
