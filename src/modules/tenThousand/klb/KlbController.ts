import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klb")
export default class KlbController {
  @operation({
    summary: "Get Klb",
  })
  @get()
  static getKlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klb",
  })
  @post("{id}")
  static createKlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
