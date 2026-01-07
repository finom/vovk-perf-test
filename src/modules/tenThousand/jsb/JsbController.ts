import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsb")
export default class JsbController {
  @operation({
    summary: "Get Jsb",
  })
  @get()
  static getJsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsb",
  })
  @post("{id}")
  static createJsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
