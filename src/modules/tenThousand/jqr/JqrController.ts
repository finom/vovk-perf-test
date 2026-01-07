import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqr")
export default class JqrController {
  @operation({
    summary: "Get Jqr",
  })
  @get()
  static getJqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqr",
  })
  @post("{id}")
  static createJqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
