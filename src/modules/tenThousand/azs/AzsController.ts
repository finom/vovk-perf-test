import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azs")
export default class AzsController {
  @operation({
    summary: "Get Azs",
  })
  @get()
  static getAzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azs",
  })
  @post("{id}")
  static createAzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
