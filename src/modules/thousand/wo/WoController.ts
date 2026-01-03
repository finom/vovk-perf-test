import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wos")
export default class WoController {
  @operation({
    summary: "Get Wos",
  })
  @get()
  static getWos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wo",
  })
  @post("{id}")
  static createWo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
