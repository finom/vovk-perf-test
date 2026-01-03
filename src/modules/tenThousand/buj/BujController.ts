import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bujs")
export default class BujController {
  @operation({
    summary: "Get Bujs",
  })
  @get()
  static getBujs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buj",
  })
  @post("{id}")
  static createBuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
