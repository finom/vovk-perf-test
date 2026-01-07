import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqm")
export default class JqmController {
  @operation({
    summary: "Get Jqm",
  })
  @get()
  static getJqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqm",
  })
  @post("{id}")
  static createJqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
