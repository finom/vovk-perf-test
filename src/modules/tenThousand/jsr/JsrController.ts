import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsr")
export default class JsrController {
  @operation({
    summary: "Get Jsr",
  })
  @get()
  static getJsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsr",
  })
  @post("{id}")
  static createJsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
