import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzw")
export default class JzwController {
  @operation({
    summary: "Get Jzw",
  })
  @get()
  static getJzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzw",
  })
  @post("{id}")
  static createJzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
