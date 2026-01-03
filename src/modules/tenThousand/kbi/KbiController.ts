import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbis")
export default class KbiController {
  @operation({
    summary: "Get Kbis",
  })
  @get()
  static getKbis = procedure({
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
