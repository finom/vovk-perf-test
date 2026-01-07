import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgm")
export default class JgmController {
  @operation({
    summary: "Get Jgm",
  })
  @get()
  static getJgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgm",
  })
  @post("{id}")
  static createJgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
