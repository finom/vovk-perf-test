import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klx")
export default class KlxController {
  @operation({
    summary: "Get Klx",
  })
  @get()
  static getKlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klx",
  })
  @post("{id}")
  static createKlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
