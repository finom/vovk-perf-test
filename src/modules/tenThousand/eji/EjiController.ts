import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejis")
export default class EjiController {
  @operation({
    summary: "Get Ejis",
  })
  @get()
  static getEjis = procedure({
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
