import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izs")
export default class IzsController {
  @operation({
    summary: "Get Izs",
  })
  @get()
  static getIzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izs",
  })
  @post("{id}")
  static createIzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
