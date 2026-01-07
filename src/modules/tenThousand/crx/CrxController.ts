import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crx")
export default class CrxController {
  @operation({
    summary: "Get Crx",
  })
  @get()
  static getCrx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crx",
  })
  @post("{id}")
  static createCrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
