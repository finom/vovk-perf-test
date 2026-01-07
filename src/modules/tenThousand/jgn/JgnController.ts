import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgn")
export default class JgnController {
  @operation({
    summary: "Get Jgn",
  })
  @get()
  static getJgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgn",
  })
  @post("{id}")
  static createJgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
