import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewr")
export default class EwrController {
  @operation({
    summary: "Get Ewr",
  })
  @get()
  static getEwr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewr",
  })
  @post("{id}")
  static createEwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
