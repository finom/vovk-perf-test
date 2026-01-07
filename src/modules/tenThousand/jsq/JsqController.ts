import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsq")
export default class JsqController {
  @operation({
    summary: "Get Jsq",
  })
  @get()
  static getJsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsq",
  })
  @post("{id}")
  static createJsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
