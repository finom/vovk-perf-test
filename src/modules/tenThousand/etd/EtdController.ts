import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etds")
export default class EtdController {
  @operation({
    summary: "Get Etds",
  })
  @get()
  static getEtds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etd",
  })
  @post("{id}")
  static createEtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
