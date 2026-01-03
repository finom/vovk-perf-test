import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crxes")
export default class CrxController {
  @operation({
    summary: "Get Crxes",
  })
  @get()
  static getCrxes = procedure({
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
