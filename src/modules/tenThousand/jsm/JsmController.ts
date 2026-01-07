import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsm")
export default class JsmController {
  @operation({
    summary: "Get Jsm",
  })
  @get()
  static getJsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsm",
  })
  @post("{id}")
  static createJsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
