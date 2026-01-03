import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klws")
export default class KlwController {
  @operation({
    summary: "Get Klws",
  })
  @get()
  static getKlws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klw",
  })
  @post("{id}")
  static createKlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
