import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmg")
export default class JmgController {
  @operation({
    summary: "Get Jmg",
  })
  @get()
  static getJmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmg",
  })
  @post("{id}")
  static createJmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
