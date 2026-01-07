import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgb")
export default class JgbController {
  @operation({
    summary: "Get Jgb",
  })
  @get()
  static getJgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgb",
  })
  @post("{id}")
  static createJgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
