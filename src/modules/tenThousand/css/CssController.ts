import { procedure, prefix, get, post, operation } from "vovk";

@prefix("css")
export default class CssController {
  @operation({
    summary: "Get Css",
  })
  @get()
  static getCss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Css",
  })
  @post("{id}")
  static createCss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
