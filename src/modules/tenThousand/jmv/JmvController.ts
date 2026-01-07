import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmv")
export default class JmvController {
  @operation({
    summary: "Get Jmv",
  })
  @get()
  static getJmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmv",
  })
  @post("{id}")
  static createJmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
