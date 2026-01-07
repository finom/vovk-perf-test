import { procedure, prefix, get, post, operation } from "vovk";

@prefix("js")
export default class JsController {
  @operation({
    summary: "Get Js",
  })
  @get()
  static getJs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Js",
  })
  @post("{id}")
  static createJs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
