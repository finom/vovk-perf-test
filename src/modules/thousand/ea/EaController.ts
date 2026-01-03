import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eas")
export default class EaController {
  @operation({
    summary: "Get Eas",
  })
  @get()
  static getEas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ea",
  })
  @post("{id}")
  static createEa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
