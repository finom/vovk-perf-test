import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klq")
export default class KlqController {
  @operation({
    summary: "Get Klq",
  })
  @get()
  static getKlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klq",
  })
  @post("{id}")
  static createKlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
