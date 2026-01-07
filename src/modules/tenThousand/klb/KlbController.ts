import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klb")
export default class KlbController {
  @operation({
    summary: "Get Klb",
  })
  @get()
  static getKlb = procedure({
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
