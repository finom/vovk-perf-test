import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqo")
export default class JqoController {
  @operation({
    summary: "Get Jqo",
  })
  @get()
  static getJqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqo",
  })
  @post("{id}")
  static createJqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
