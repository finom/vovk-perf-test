import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etf")
export default class EtfController {
  @operation({
    summary: "Get Etf",
  })
  @get()
  static getEtf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etf",
  })
  @post("{id}")
  static createEtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
