import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzl")
export default class JzlController {
  @operation({
    summary: "Get Jzl",
  })
  @get()
  static getJzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzl",
  })
  @post("{id}")
  static createJzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
