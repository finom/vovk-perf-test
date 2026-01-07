import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqg")
export default class JqgController {
  @operation({
    summary: "Get Jqg",
  })
  @get()
  static getJqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqg",
  })
  @post("{id}")
  static createJqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
