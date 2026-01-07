import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ea")
export default class EaController {
  @operation({
    summary: "Get Ea",
  })
  @get()
  static getEa = procedure({
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
