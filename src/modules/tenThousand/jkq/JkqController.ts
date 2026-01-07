import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkq")
export default class JkqController {
  @operation({
    summary: "Get Jkq",
  })
  @get()
  static getJkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkq",
  })
  @post("{id}")
  static createJkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
