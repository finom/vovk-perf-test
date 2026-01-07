import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gal")
export default class GalController {
  @operation({
    summary: "Get Gal",
  })
  @get()
  static getGal = procedure({
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
