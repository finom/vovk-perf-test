import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgx")
export default class JgxController {
  @operation({
    summary: "Get Jgx",
  })
  @get()
  static getJgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgx",
  })
  @post("{id}")
  static createJgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
