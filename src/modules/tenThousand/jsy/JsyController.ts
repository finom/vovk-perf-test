import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsy")
export default class JsyController {
  @operation({
    summary: "Get Jsy",
  })
  @get()
  static getJsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsy",
  })
  @post("{id}")
  static createJsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
