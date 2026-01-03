import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwrs")
export default class GwrController {
  @operation({
    summary: "Get Gwrs",
  })
  @get()
  static getGwrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwr",
  })
  @post("{id}")
  static createGwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
