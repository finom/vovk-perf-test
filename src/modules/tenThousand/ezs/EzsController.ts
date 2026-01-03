import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezs")
export default class EzsController {
  @operation({
    summary: "Get Ezs",
  })
  @get()
  static getEzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezs",
  })
  @post("{id}")
  static createEzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
