import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgf")
export default class JgfController {
  @operation({
    summary: "Get Jgf",
  })
  @get()
  static getJgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgf",
  })
  @post("{id}")
  static createJgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
