import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqy")
export default class JqyController {
  @operation({
    summary: "Get Jqy",
  })
  @get()
  static getJqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqy",
  })
  @post("{id}")
  static createJqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
