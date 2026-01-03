import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esns")
export default class EsnController {
  @operation({
    summary: "Get Esns",
  })
  @get()
  static getEsns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esn",
  })
  @post("{id}")
  static createEsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
