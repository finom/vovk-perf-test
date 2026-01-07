import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzq")
export default class JzqController {
  @operation({
    summary: "Get Jzq",
  })
  @get()
  static getJzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzq",
  })
  @post("{id}")
  static createJzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
