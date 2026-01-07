import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxk")
export default class JxkController {
  @operation({
    summary: "Get Jxk",
  })
  @get()
  static getJxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxk",
  })
  @post("{id}")
  static createJxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
