import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klw")
export default class KlwController {
  @operation({
    summary: "Get Klw",
  })
  @get()
  static getKlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klw",
  })
  @post("{id}")
  static createKlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
