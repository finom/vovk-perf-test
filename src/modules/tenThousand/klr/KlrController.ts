import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klrs")
export default class KlrController {
  @operation({
    summary: "Get Klrs",
  })
  @get()
  static getKlrs = procedure({
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
