import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgk")
export default class JgkController {
  @operation({
    summary: "Get Jgk",
  })
  @get()
  static getJgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgk",
  })
  @post("{id}")
  static createJgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
