import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzz")
export default class JzzController {
  @operation({
    summary: "Get Jzz",
  })
  @get()
  static getJzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzz",
  })
  @post("{id}")
  static createJzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
