import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzas")
export default class GzaController {
  @operation({
    summary: "Get Gzas",
  })
  @get()
  static getGzas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gza",
  })
  @post("{id}")
  static createGza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
