import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gls")
export default class GlsController {
  @operation({
    summary: "Get Gls",
  })
  @get()
  static getGls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gls",
  })
  @post("{id}")
  static createGls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
