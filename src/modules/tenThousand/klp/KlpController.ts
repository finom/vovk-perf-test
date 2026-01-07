import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klp")
export default class KlpController {
  @operation({
    summary: "Get Klp",
  })
  @get()
  static getKlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klp",
  })
  @post("{id}")
  static createKlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
