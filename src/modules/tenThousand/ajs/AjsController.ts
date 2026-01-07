import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajs")
export default class AjsController {
  @operation({
    summary: "Get Ajs",
  })
  @get()
  static getAjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajs",
  })
  @post("{id}")
  static createAjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
