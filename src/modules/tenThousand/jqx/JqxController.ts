import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqx")
export default class JqxController {
  @operation({
    summary: "Get Jqx",
  })
  @get()
  static getJqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqx",
  })
  @post("{id}")
  static createJqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
