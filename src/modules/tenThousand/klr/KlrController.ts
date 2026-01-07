import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klr")
export default class KlrController {
  @operation({
    summary: "Get Klr",
  })
  @get()
  static getKlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klr",
  })
  @post("{id}")
  static createKlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
