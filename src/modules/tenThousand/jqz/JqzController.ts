import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqz")
export default class JqzController {
  @operation({
    summary: "Get Jqz",
  })
  @get()
  static getJqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqz",
  })
  @post("{id}")
  static createJqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
