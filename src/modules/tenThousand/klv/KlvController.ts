import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klv")
export default class KlvController {
  @operation({
    summary: "Get Klv",
  })
  @get()
  static getKlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klv",
  })
  @post("{id}")
  static createKlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
