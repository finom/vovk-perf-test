import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adr")
export default class AdrController {
  @operation({
    summary: "Get Adr",
  })
  @get()
  static getAdr = procedure({
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
