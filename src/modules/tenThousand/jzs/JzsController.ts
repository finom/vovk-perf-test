import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzs")
export default class JzsController {
  @operation({
    summary: "Get Jzs",
  })
  @get()
  static getJzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzs",
  })
  @post("{id}")
  static createJzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
