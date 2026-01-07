import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqw")
export default class JqwController {
  @operation({
    summary: "Get Jqw",
  })
  @get()
  static getJqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqw",
  })
  @post("{id}")
  static createJqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
