import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eea")
export default class EeaController {
  @operation({
    summary: "Get Eea",
  })
  @get()
  static getEea = procedure({
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
