import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klms")
export default class KlmController {
  @operation({
    summary: "Get Klms",
  })
  @get()
  static getKlms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klm",
  })
  @post("{id}")
  static createKlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
