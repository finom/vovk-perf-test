import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klr")
export default class KlrController {
  @operation({
    summary: "Get Klr",
  })
  @get()
  static getKlr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klr",
  })
  @post("{id}")
  static createKlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
