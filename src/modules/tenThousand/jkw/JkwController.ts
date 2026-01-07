import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkw")
export default class JkwController {
  @operation({
    summary: "Get Jkw",
  })
  @get()
  static getJkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkw",
  })
  @post("{id}")
  static createJkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
