import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gde")
export default class GdeController {
  @operation({
    summary: "Get Gde",
  })
  @get()
  static getGde = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gde",
  })
  @post("{id}")
  static createGde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
