import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajts")
export default class AjtController {
  @operation({
    summary: "Get Ajts",
  })
  @get()
  static getAjts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajt",
  })
  @post("{id}")
  static createAjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
