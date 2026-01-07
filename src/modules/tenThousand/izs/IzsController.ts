import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izs")
export default class IzsController {
  @operation({
    summary: "Get Izs",
  })
  @get()
  static getIzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izs",
  })
  @post("{id}")
  static createIzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
