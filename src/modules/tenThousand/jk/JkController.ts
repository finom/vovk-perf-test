import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jk")
export default class JkController {
  @operation({
    summary: "Get Jk",
  })
  @get()
  static getJk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jk",
  })
  @post("{id}")
  static createJk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
