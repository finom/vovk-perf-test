import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzs")
export default class BzsController {
  @operation({
    summary: "Get Bzs",
  })
  @get()
  static getBzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzs",
  })
  @post("{id}")
  static createBzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
