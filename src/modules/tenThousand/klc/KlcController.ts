import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klc")
export default class KlcController {
  @operation({
    summary: "Get Klc",
  })
  @get()
  static getKlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klc",
  })
  @post("{id}")
  static createKlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
