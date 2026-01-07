import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqj")
export default class JqjController {
  @operation({
    summary: "Get Jqj",
  })
  @get()
  static getJqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqj",
  })
  @post("{id}")
  static createJqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
