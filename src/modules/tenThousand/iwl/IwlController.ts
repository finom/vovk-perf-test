import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwl")
export default class IwlController {
  @operation({
    summary: "Get Iwl",
  })
  @get()
  static getIwl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwl",
  })
  @post("{id}")
  static createIwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
