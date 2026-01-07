import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgd")
export default class JgdController {
  @operation({
    summary: "Get Jgd",
  })
  @get()
  static getJgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgd",
  })
  @post("{id}")
  static createJgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
