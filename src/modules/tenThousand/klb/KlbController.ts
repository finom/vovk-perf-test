import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klbs")
export default class KlbController {
  @operation({
    summary: "Get Klbs",
  })
  @get()
  static getKlbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klb",
  })
  @post("{id}")
  static createKlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
