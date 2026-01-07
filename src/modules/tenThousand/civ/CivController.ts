import { procedure, prefix, get, post, operation } from "vovk";

@prefix("civ")
export default class CivController {
  @operation({
    summary: "Get Civ",
  })
  @get()
  static getCiv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Civ",
  })
  @post("{id}")
  static createCiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
