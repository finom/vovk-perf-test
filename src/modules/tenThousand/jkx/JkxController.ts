import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkx")
export default class JkxController {
  @operation({
    summary: "Get Jkx",
  })
  @get()
  static getJkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkx",
  })
  @post("{id}")
  static createJkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
