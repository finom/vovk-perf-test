import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gajs")
export default class GajController {
  @operation({
    summary: "Get Gajs",
  })
  @get()
  static getGajs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gaj",
  })
  @post("{id}")
  static createGaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
