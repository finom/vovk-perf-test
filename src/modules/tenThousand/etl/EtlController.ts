import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etl")
export default class EtlController {
  @operation({
    summary: "Get Etl",
  })
  @get()
  static getEtl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etl",
  })
  @post("{id}")
  static createEtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
