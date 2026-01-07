import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuo")
export default class IuoController {
  @operation({
    summary: "Get Iuo",
  })
  @get()
  static getIuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuo",
  })
  @post("{id}")
  static createIuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
