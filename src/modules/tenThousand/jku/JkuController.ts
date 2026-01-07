import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jku")
export default class JkuController {
  @operation({
    summary: "Get Jku",
  })
  @get()
  static getJku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jku",
  })
  @post("{id}")
  static createJku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
