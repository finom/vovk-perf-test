import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eujs")
export default class EujController {
  @operation({
    summary: "Get Eujs",
  })
  @get()
  static getEujs = procedure({
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
