import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eas")
export default class EasController {
  @operation({
    summary: "Get Eas",
  })
  @get()
  static getEas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eas",
  })
  @post("{id}")
  static createEas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
