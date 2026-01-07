import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzx")
export default class JzxController {
  @operation({
    summary: "Get Jzx",
  })
  @get()
  static getJzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzx",
  })
  @post("{id}")
  static createJzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
