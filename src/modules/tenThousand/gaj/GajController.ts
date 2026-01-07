import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaj")
export default class GajController {
  @operation({
    summary: "Get Gaj",
  })
  @get()
  static getGaj = procedure({
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
