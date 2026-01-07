import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgv")
export default class JgvController {
  @operation({
    summary: "Get Jgv",
  })
  @get()
  static getJgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgv",
  })
  @post("{id}")
  static createJgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
