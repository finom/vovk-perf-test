import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eco")
export default class EcoController {
  @operation({
    summary: "Get Eco",
  })
  @get()
  static getEco = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eco",
  })
  @post("{id}")
  static createEco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
