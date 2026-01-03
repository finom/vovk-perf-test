import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esps")
export default class EspController {
  @operation({
    summary: "Get Esps",
  })
  @get()
  static getEsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esp",
  })
  @post("{id}")
  static createEsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
