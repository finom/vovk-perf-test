import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gals")
export default class GalController {
  @operation({
    summary: "Get Gals",
  })
  @get()
  static getGals = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gal",
  })
  @post("{id}")
  static createGal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
