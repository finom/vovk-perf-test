import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkr")
export default class JkrController {
  @operation({
    summary: "Get Jkr",
  })
  @get()
  static getJkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkr",
  })
  @post("{id}")
  static createJkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
