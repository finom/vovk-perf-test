import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klm")
export default class KlmController {
  @operation({
    summary: "Get Klm",
  })
  @get()
  static getKlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klm",
  })
  @post("{id}")
  static createKlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
