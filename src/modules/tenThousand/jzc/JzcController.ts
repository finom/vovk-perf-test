import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzc")
export default class JzcController {
  @operation({
    summary: "Get Jzc",
  })
  @get()
  static getJzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzc",
  })
  @post("{id}")
  static createJzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
