import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayds")
export default class AydController {
  @operation({
    summary: "Get Ayds",
  })
  @get()
  static getAyds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayd",
  })
  @post("{id}")
  static createAyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
