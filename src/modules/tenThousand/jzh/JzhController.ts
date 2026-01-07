import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzh")
export default class JzhController {
  @operation({
    summary: "Get Jzh",
  })
  @get()
  static getJzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzh",
  })
  @post("{id}")
  static createJzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
