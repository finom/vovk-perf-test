import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izs")
export default class IzController {
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
    summary: "Create Iz",
  })
  @post("{id}")
  static createIz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
