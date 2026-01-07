import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgc")
export default class JgcController {
  @operation({
    summary: "Get Jgc",
  })
  @get()
  static getJgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgc",
  })
  @post("{id}")
  static createJgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
