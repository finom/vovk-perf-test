import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijis")
export default class IjiController {
  @operation({
    summary: "Get Ijis",
  })
  @get()
  static getIjis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iji",
  })
  @post("{id}")
  static createIji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
