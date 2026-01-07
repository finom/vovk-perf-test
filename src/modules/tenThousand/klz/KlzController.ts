import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klz")
export default class KlzController {
  @operation({
    summary: "Get Klz",
  })
  @get()
  static getKlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klz",
  })
  @post("{id}")
  static createKlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
