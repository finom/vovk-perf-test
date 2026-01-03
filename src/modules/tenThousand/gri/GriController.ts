import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gris")
export default class GriController {
  @operation({
    summary: "Get Gris",
  })
  @get()
  static getGris = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gri",
  })
  @post("{id}")
  static createGri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
