import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cims")
export default class CimController {
  @operation({
    summary: "Get Cims",
  })
  @get()
  static getCims = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cim",
  })
  @post("{id}")
  static createCim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
