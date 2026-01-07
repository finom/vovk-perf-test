import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkd")
export default class JkdController {
  @operation({
    summary: "Get Jkd",
  })
  @get()
  static getJkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkd",
  })
  @post("{id}")
  static createJkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
