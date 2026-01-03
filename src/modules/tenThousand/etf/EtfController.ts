import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etfs")
export default class EtfController {
  @operation({
    summary: "Get Etfs",
  })
  @get()
  static getEtfs = procedure({
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
