import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqn")
export default class JqnController {
  @operation({
    summary: "Get Jqn",
  })
  @get()
  static getJqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqn",
  })
  @post("{id}")
  static createJqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
