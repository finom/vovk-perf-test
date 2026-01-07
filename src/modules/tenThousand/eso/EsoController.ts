import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eso")
export default class EsoController {
  @operation({
    summary: "Get Eso",
  })
  @get()
  static getEso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eso",
  })
  @post("{id}")
  static createEso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
