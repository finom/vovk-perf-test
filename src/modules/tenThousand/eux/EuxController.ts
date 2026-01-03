import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euxes")
export default class EuxController {
  @operation({
    summary: "Get Euxes",
  })
  @get()
  static getEuxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eux",
  })
  @post("{id}")
  static createEux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
