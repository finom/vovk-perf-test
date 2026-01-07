import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsz")
export default class JszController {
  @operation({
    summary: "Get Jsz",
  })
  @get()
  static getJsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsz",
  })
  @post("{id}")
  static createJsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
