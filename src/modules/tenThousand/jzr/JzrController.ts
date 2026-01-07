import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzr")
export default class JzrController {
  @operation({
    summary: "Get Jzr",
  })
  @get()
  static getJzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzr",
  })
  @post("{id}")
  static createJzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
