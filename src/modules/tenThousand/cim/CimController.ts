import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cim")
export default class CimController {
  @operation({
    summary: "Get Cim",
  })
  @get()
  static getCim = procedure({
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
