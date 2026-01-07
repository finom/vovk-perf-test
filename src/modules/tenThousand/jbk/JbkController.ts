import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbk")
export default class JbkController {
  @operation({
    summary: "Get Jbk",
  })
  @get()
  static getJbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbk",
  })
  @post("{id}")
  static createJbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
