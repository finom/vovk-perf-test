import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzd")
export default class JzdController {
  @operation({
    summary: "Get Jzd",
  })
  @get()
  static getJzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzd",
  })
  @post("{id}")
  static createJzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
