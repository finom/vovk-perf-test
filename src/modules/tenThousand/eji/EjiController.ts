import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eji")
export default class EjiController {
  @operation({
    summary: "Get Eji",
  })
  @get()
  static getEji = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eji",
  })
  @post("{id}")
  static createEji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
