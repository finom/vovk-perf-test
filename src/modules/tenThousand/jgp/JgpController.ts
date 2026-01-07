import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgp")
export default class JgpController {
  @operation({
    summary: "Get Jgp",
  })
  @get()
  static getJgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgp",
  })
  @post("{id}")
  static createJgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
