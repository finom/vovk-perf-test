import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsw")
export default class JswController {
  @operation({
    summary: "Get Jsw",
  })
  @get()
  static getJsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsw",
  })
  @post("{id}")
  static createJsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
