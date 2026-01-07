import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euj")
export default class EujController {
  @operation({
    summary: "Get Euj",
  })
  @get()
  static getEuj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euj",
  })
  @post("{id}")
  static createEuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
