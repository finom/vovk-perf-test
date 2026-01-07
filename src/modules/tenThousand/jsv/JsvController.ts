import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsv")
export default class JsvController {
  @operation({
    summary: "Get Jsv",
  })
  @get()
  static getJsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsv",
  })
  @post("{id}")
  static createJsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
