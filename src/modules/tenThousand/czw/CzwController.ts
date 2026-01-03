import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czws")
export default class CzwController {
  @operation({
    summary: "Get Czws",
  })
  @get()
  static getCzws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czw",
  })
  @post("{id}")
  static createCzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
