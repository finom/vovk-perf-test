import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqh")
export default class JqhController {
  @operation({
    summary: "Get Jqh",
  })
  @get()
  static getJqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqh",
  })
  @post("{id}")
  static createJqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
