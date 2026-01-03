import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klvs")
export default class KlvController {
  @operation({
    summary: "Get Klvs",
  })
  @get()
  static getKlvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klv",
  })
  @post("{id}")
  static createKlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
