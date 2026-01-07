import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqq")
export default class JqqController {
  @operation({
    summary: "Get Jqq",
  })
  @get()
  static getJqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqq",
  })
  @post("{id}")
  static createJqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
