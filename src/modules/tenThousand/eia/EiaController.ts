import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eias")
export default class EiaController {
  @operation({
    summary: "Get Eias",
  })
  @get()
  static getEias = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eia",
  })
  @post("{id}")
  static createEia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
