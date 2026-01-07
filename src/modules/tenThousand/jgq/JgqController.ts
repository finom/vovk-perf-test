import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgq")
export default class JgqController {
  @operation({
    summary: "Get Jgq",
  })
  @get()
  static getJgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgq",
  })
  @post("{id}")
  static createJgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
