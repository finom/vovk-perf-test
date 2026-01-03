import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eczs")
export default class EczController {
  @operation({
    summary: "Get Eczs",
  })
  @get()
  static getEczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecz",
  })
  @post("{id}")
  static createEcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
