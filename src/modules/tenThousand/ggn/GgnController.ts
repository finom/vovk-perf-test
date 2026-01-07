import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggn")
export default class GgnController {
  @operation({
    summary: "Get Ggn",
  })
  @get()
  static getGgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggn",
  })
  @post("{id}")
  static createGgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
