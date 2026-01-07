import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkz")
export default class JkzController {
  @operation({
    summary: "Get Jkz",
  })
  @get()
  static getJkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkz",
  })
  @post("{id}")
  static createJkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
