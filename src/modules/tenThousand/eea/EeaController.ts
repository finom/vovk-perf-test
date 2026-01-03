import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeas")
export default class EeaController {
  @operation({
    summary: "Get Eeas",
  })
  @get()
  static getEeas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eea",
  })
  @post("{id}")
  static createEea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
