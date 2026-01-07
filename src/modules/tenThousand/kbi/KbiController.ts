import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbi")
export default class KbiController {
  @operation({
    summary: "Get Kbi",
  })
  @get()
  static getKbi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbi",
  })
  @post("{id}")
  static createKbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
