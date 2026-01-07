import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqv")
export default class JqvController {
  @operation({
    summary: "Get Jqv",
  })
  @get()
  static getJqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqv",
  })
  @post("{id}")
  static createJqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
