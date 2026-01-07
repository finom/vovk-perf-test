import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsa")
export default class JsaController {
  @operation({
    summary: "Get Jsa",
  })
  @get()
  static getJsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsa",
  })
  @post("{id}")
  static createJsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
