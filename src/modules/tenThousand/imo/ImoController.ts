import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imo")
export default class ImoController {
  @operation({
    summary: "Get Imo",
  })
  @get()
  static getImo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imo",
  })
  @post("{id}")
  static createImo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
