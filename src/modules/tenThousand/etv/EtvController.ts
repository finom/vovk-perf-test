import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etv")
export default class EtvController {
  @operation({
    summary: "Get Etv",
  })
  @get()
  static getEtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etv",
  })
  @post("{id}")
  static createEtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
