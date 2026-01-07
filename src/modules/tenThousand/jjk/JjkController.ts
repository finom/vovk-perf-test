import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjk")
export default class JjkController {
  @operation({
    summary: "Get Jjk",
  })
  @get()
  static getJjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjk",
  })
  @post("{id}")
  static createJjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
