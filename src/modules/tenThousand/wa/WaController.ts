import { procedure, prefix, get, post, operation } from "vovk";

@prefix("was")
export default class WaController {
  @operation({
    summary: "Get Was",
  })
  @get()
  static getWas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wa",
  })
  @post("{id}")
  static createWa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
