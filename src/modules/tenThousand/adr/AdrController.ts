import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adrs")
export default class AdrController {
  @operation({
    summary: "Get Adrs",
  })
  @get()
  static getAdrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adr",
  })
  @post("{id}")
  static createAdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
