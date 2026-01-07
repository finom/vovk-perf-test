import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqk")
export default class JqkController {
  @operation({
    summary: "Get Jqk",
  })
  @get()
  static getJqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqk",
  })
  @post("{id}")
  static createJqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
