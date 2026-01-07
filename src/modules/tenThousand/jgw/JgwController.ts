import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgw")
export default class JgwController {
  @operation({
    summary: "Get Jgw",
  })
  @get()
  static getJgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgw",
  })
  @post("{id}")
  static createJgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
